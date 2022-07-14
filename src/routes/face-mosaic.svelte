<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import CameraView from "~/lib/camera-view";
  import { FaceDetector } from "~/lib/detector";

  let canvas: HTMLCanvasElement;
  let detector: FaceDetector | undefined;
  let view: CameraView | undefined;
  let frameRate = 0;

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

  $: deviceOptions.items.length > 0 && init(deviceOptions.selected);
  $: {
    if (videoState.status === "running") {
      if (detector) {
        const { stop } = detector.listen(
          videoState.video!,
          (faces) => {
            if (videoState.status === "running") {
              view?.updateMosaic(...faces);
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

  function onDeviceChanged(
    e: Event & { currentTarget: EventTarget & HTMLSelectElement }
  ) {
    deviceOptions = {
      ...deviceOptions,
      selected: e.currentTarget.value,
    };
  }

  async function init(deviceId: string) {
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

    const [stream, faceDetector] = await Promise.all([
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
      FaceDetector.init(),
    ]);

    if (!stream) return;

    detector = faceDetector;

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
  }
</script>

<svelte:head>
  <title>顔認識 + モザイク</title>
</svelte:head>

<h2>顔認識 + モザイク</h2>
<div class="ActionBox">
  <button disabled={!detector} type="button" on:click={onStatusToggle}>
    {#if videoState.status === "running"}
      停止
    {:else}
      開始
    {/if}
  </button>
  <select on:change={onDeviceChanged}>
    {#each deviceOptions.items as device}
      <option value={device.deviceId}>{device.label}</option>
    {:else}
      <option value="">デバイスなし</option>
    {/each}
  </select>
  <span>顔認識フレームレート: {frameRate}fps</span>
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
