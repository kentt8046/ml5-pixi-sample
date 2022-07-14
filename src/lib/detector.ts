import "@tensorflow/tfjs-core";

import "@tensorflow/tfjs-backend-webgl";

import * as faceDetection from "@tensorflow-models/face-detection";

abstract class Detector<T> {
  private listening = false;

  private current = 0;
  private timestamp = 0;

  abstract detect(video: HTMLVideoElement): Promise<T>;

  listen(
    video: HTMLVideoElement,
    callback: (objects: T) => void,
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
      },
    };

    async function runLoop() {
      if (!self.listening) return;

      const objects = await self.detect(video);
      callback(objects);

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
  private static self?: FaceDetector;

  private constructor(private readonly detector: faceDetection.FaceDetector) {
    super();
  }

  async detect(video: HTMLVideoElement) {
    return this.detector.estimateFaces(video);
  }

  static async init() {
    if (this.self) return this.self;

    const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
    const detector = await faceDetection.createDetector(model, {
      runtime: "tfjs",
      maxFaces: 10,
    });

    return (this.self = new FaceDetector(detector));
  }
}
