<script lang="ts" context="module">
  function toArrayBuffer(file: File) {
    return new Promise<ArrayBuffer>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target!.result as ArrayBuffer);
      };

      reader.readAsArrayBuffer(file);
    });
  }
  function toDataUrl(file: File) {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target!.result as string);
      };

      reader.readAsDataURL(file);
    });
  }
</script>

<script lang="ts">
  import type { MediaPipeSelfieSegmentationModelConfig } from "@tensorflow-models/body-segmentation/dist/selfie_segmentation_mediapipe/types";
  import { onDestroy, onMount } from "svelte";
  import CameraView, { ready } from "~/lib/camera-view";
  import { BodyDetector } from "~/lib/detector";

  let canvas: HTMLCanvasElement;
  let detector: BodyDetector | undefined;
  let view: CameraView | undefined;
  let frameRate = 0;
  let bgImage: string | undefined;

  let videoState: {
    video?: HTMLVideoElement;
    status: "running" | "stopped";
  } = {
    status: "stopped",
  };

  let deviceOptions: {
    items: MediaDeviceInfo[];
    selected: string;
  } = {
    items: [],
    selected: "",
  };

  let runtimeOptions: {
    items: MediaPipeSelfieSegmentationModelConfig["runtime"][];
    selected: MediaPipeSelfieSegmentationModelConfig["runtime"];
  } = {
    items: ["tfjs", "mediapipe"],
    selected: "tfjs",
  };

  onMount(async () => {
    const devices = (await navigator.mediaDevices.enumerateDevices()).filter(
      (device) => device.kind === "videoinput"
    );
    const selected = devices[0]?.deviceId ?? "";

    deviceOptions = {
      items: devices,
      selected,
    };
  });

  onDestroy(() => {
    videoState.video?.pause();
    (videoState.video?.srcObject as MediaStream | null)
      ?.getVideoTracks()
      .forEach((camera) => {
        camera.stop();
      });

    view?.destroy();
  });

  $: deviceOptions.items.length > 0 &&
    init(deviceOptions.selected, runtimeOptions.selected);
  $: {
    if (videoState.status === "running") {
      if (detector) {
        const { stop } = detector.listen(
          videoState.video!,
          async (segmentation) => {
            const mask = await BodyDetector.toImageData(segmentation);
            if (videoState.status === "running") {
              view?.applyBgFilter(mask);
            } else {
              stop();
            }
          },
          (rate) => (frameRate = rate)
        );
      }
    } else {
      view?.clear();
    }
  }

  function onStatusToggle() {
    videoState = {
      ...videoState,
      status: videoState.status === "running" ? "stopped" : "running",
    };
  }

  async function selectBgImage(e: Event & { currentTarget: HTMLInputElement }) {
    const file = e.currentTarget.files?.[0];
    if (!file) return;
    bgImage = await toDataUrl(file);
    view?.setMaskBase(bgImage);
  }

  async function init(
    deviceId: string,
    runtime: MediaPipeSelfieSegmentationModelConfig["runtime"]
  ) {
    const width = 640;
    const height = 480;

    videoState = {
      ...videoState,
      status: "stopped",
    };

    const { video } = videoState;

    if (!video) return;

    if (!deviceId) {
      video.pause();

      (video.srcObject as MediaStream | null)
        ?.getVideoTracks()
        .forEach((camera) => {
          camera.stop();
        });

      video.srcObject = null;
      detector = undefined;
      return;
    }

    const [stream, bodyDetector] = await Promise.all([
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            width,
            height,
            deviceId,
          },
        })
        .catch(() => {
          alert("カメラが見つかりません。");
          return undefined;
        }),
      BodyDetector.init(runtime),
      ready(),
    ]);

    if (!stream) return;

    detector = bodyDetector;

    video.srcObject = stream;
    video.width = width;
    video.height = height;

    canvas.width = width;
    canvas.height = height;

    if (video.readyState < 2) {
      await new Promise((resolve) => {
        video!.onloadeddata = resolve;
      });
    }

    video.play();

    view?.destroy();
    view = new CameraView(video, canvas, width, height);
    if (bgImage) view.setMaskBase(bgImage);
  }
</script>

<svelte:head>
  <title>背景置換</title>
</svelte:head>

<h2>背景置換</h2>
<div class="ActionBox">
  <button disabled={!detector} type="button" on:click={onStatusToggle}>
    {#if videoState.status === "running"}
      停止
    {:else}
      開始
    {/if}
  </button>
  <select bind:value={deviceOptions.selected}>
    {#each deviceOptions.items as device}
      <option value={device.deviceId}>{device.label}</option>
    {:else}
      <option value="">デバイスなし</option>
    {/each}
  </select>
  <select bind:value={runtimeOptions.selected}>
    {#each runtimeOptions.items as runtime}
      <option value={runtime}>{runtime}</option>
    {/each}
  </select>
  <input type="file" accept="png,jpg,jpeg" on:change={selectBgImage} />
  <span>体認識フレームレート: {frameRate}fps</span>
</div>
<div>
  <canvas bind:this={canvas} />
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    bind:this={videoState.video}
    playsinline
    style="
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      visibility: hidden;
      width: auto;
      height: auto;
    "
  />
</div>

<style lang="scss">
  .ActionBox {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;

    & > button {
      padding: 4px;
    }
  }
</style>
