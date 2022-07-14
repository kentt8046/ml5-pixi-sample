import { PixelateFilter } from "@pixi/filter-pixelate";
import type { Face } from "@tensorflow-models/face-detection";
import * as PIXI from "pixi.js";

PIXI.utils.skipHello();

const offset = 100;

export default class CameraView {
  private readonly app: PIXI.Application;
  private readonly mosaics: PIXI.Sprite[] = [];
  private readonly pixelateFilter = new PixelateFilter(20);
  private readonly base: PIXI.Sprite;

  constructor(
    private readonly video: HTMLVideoElement,
    canvas: HTMLCanvasElement,
    width: number,
    height: number
  ) {
    this.app = new PIXI.Application({
      view: canvas,
      width,
      height,
      powerPreference: "high-performance",
    });

    this.base = PIXI.Sprite.from(video);
    this.base.width = width;
    this.base.height = height;

    this.app.stage.addChild(this.base);
  }

  updateMosaic(...faces: Face[]) {
    const { width, height } = this.video;

    let i = 0;
    for (; i < faces.length; i++) {
      const box = faces[i].box;
      const mosaic = (this.mosaics[i] ??= (() => {
        const sprite = new PIXI.Sprite();
        sprite.filters = [this.pixelateFilter];
        this.app.stage.addChild(sprite);
        return sprite;
      })());

      const rect = {
        x: box.xMin - offset / 2,
        y: box.yMin - offset / 2,
        w: box.width + offset,
        h: box.height + offset,
      };
      if (rect.x + rect.w > width) rect.w = width - rect.x;
      if (rect.y + rect.h > height) rect.h = height - rect.y;

      mosaic.texture = new PIXI.Texture(
        PIXI.BaseTexture.from(this.video),
        new PIXI.Rectangle(rect.x, rect.y, rect.w, rect.h)
      );

      mosaic.position.x = rect.x;
      mosaic.position.y = rect.y;
      mosaic.width = rect.w;
      mosaic.height = rect.h;
    }

    this.mosaics.splice(i, this.mosaics.length).forEach((mosaic) => {
      mosaic.visible = false;
      this.app.stage.removeChild(mosaic);
    });
  }

  clear() {
    this.mosaics.splice(0, this.mosaics.length).forEach((mosaic) => {
      mosaic.visible = false;
      this.app.stage.removeChild(mosaic);
    });
  }

  destroy() {
    this.app.destroy(false, true);
  }
}
