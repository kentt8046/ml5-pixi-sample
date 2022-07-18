import "@tensorflow/tfjs-core";

import "@tensorflow/tfjs-backend-webgl";

import * as bodySegmentation from "@tensorflow-models/body-segmentation";
import type { MediaPipeSelfieSegmentationModelConfig } from "@tensorflow-models/body-segmentation/dist/selfie_segmentation_mediapipe/types";
import type { Segmentation } from "@tensorflow-models/body-segmentation/dist/shared/calculators/interfaces/common_interfaces";
import * as faceDetection from "@tensorflow-models/face-detection";
import type { MediaPipeFaceDetectorModelConfig } from "@tensorflow-models/face-detection/dist/mediapipe/types";

abstract class Detector<T> {
  private listening = false;

  private current = 0;
  private timestamp = 0;

  abstract detect(video: HTMLVideoElement): Promise<T>;

  listen(
    video: HTMLVideoElement,
    callback: (objects: T) => void | Promise<void>,
    onTick?: (frameRate: number) => void
  ) {
    if (this.listening) throw "already listened.";

    this.listening = true;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    tick();
    runLoop();

    return {
      stop: () => {
        this.listening = false;
        this.current = 0;
        this.timestamp = 0;

        onTick?.(0);
      },
    };

    async function runLoop() {
      if (!self.listening) return;

      const objects = await self.detect(video);
      await callback(objects);

      self.current++;

      requestAnimationFrame(runLoop);
    }

    function tick() {
      if (!self.listening) return;

      const now = performance.now();
      if (now - self.timestamp > 1000) {
        const frameRate = self.current;
        self.current = 0;
        self.timestamp = now;

        onTick?.(frameRate);
      }

      requestAnimationFrame(tick);
    }
  }

  destroy() {
    this.listening = false;
    this.current = 0;
    this.timestamp = 0;
  }
}

export class FaceDetector extends Detector<faceDetection.Face[]> {
  private constructor(private readonly detector: faceDetection.FaceDetector) {
    super();
  }

  async detect(video: HTMLVideoElement) {
    return this.detector.estimateFaces(video);
  }

  static async init(runtime: MediaPipeFaceDetectorModelConfig["runtime"]) {
    const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
    const detector = await faceDetection.createDetector(model, {
      runtime,
      maxFaces: 10,
      solutionPath:
        runtime === "mediapipe"
          ? "https://cdn.jsdelivr.net/npm/@mediapipe/face_detection"
          : undefined,
    });

    return new FaceDetector(detector);
  }
}

export class BodyDetector extends Detector<Segmentation> {
  private constructor(
    private readonly detector: bodySegmentation.BodySegmenter
  ) {
    super();
  }

  async detect(video: HTMLVideoElement) {
    return this.detector
      .segmentPeople(video)
      .then((segmentations) => segmentations[0]);
  }

  static async init(
    runtime: MediaPipeSelfieSegmentationModelConfig["runtime"]
  ) {
    const model = bodySegmentation.SupportedModels.MediaPipeSelfieSegmentation;
    const detector = await bodySegmentation.createSegmenter(model, {
      runtime,
      solutionPath:
        runtime === "mediapipe"
          ? "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation"
          : undefined,
    });

    return new BodyDetector(detector);
  }

  static toImageData(segmentation: Segmentation) {
    return bodySegmentation.toBinaryMask(
      segmentation,
      {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
      {
        r: 0xff,
        g: 0xff,
        b: 0xff,
        a: 0xff,
      }
    );
  }
}
