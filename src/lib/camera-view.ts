import { PixelateFilter } from "@pixi/filter-pixelate";
import type { Face } from "@tensorflow-models/face-detection";
import * as PIXI from "pixi.js";

PIXI.utils.skipHello();

const offset = 100;

export default class CameraView {
  private readonly app: PIXI.Application;
  private readonly mosaics: PIXI.Sprite[] = [];
  private readonly mask = new PIXI.Sprite();
  private readonly pixelateFilter = new PixelateFilter(20);
  private readonly base: PIXI.Sprite;

  constructor(
    private readonly bgResource: PIXI.SpriteSource,
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

    this.base = PIXI.Sprite.from(bgResource);
    this.base.width = width;
    this.base.height = height;

    this.app.stage.addChild(this.base);
  }

  changeBase(resource: PIXI.TextureSource, width?: number, height?: number) {
    this.base.texture = PIXI.Texture.from(resource);
    if (typeof width === "number") this.base.width = width;
    if (typeof height === "number") this.base.height = height;
  }

  updateMosaic(...faces: Face[]) {
    isVideoElement(this.bgResource);

    const video = this.bgResource;
    const { width, height } = video;

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
        PIXI.BaseTexture.from(video),
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

  setMaskBase(resource: Parameters<typeof PIXI.Texture.from>[0]) {
    this.mask.texture = PIXI.Texture.from(resource);
  }

  applyBgFilter(maskData: ImageData) {
    const mask = (this.mask.mask ??= new PIXI.Sprite()) as PIXI.Sprite;

    mask.texture = PIXI.Texture.from(
      PIXI.BaseTexture.fromBuffer(
        maskData.data as unknown as Uint8Array,
        maskData.width,
        maskData.height
      )
    );

    this.app.stage.addChild(this.mask);
  }

  clear() {
    this.mosaics.splice(0, this.mosaics.length).forEach((mosaic) => {
      mosaic.visible = false;
      this.app.stage.removeChild(mosaic);
    });

    this.app.stage.removeChild(this.mask);
  }

  destroy() {
    this.clear();
    this.app.destroy(false, true);
  }
}

function isVideoElement(obj: unknown): asserts obj is HTMLVideoElement {
  if ((obj as HTMLVideoElement).tagName === "VIDEO") return;
  throw "not video.";
}
