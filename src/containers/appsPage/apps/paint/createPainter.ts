import { Application, Sprite, Texture, SCALE_MODES } from "pixi.js";
import { PaintingSettings } from "./types";
import { dropAlphaChannel } from "../../../../features/utils/misc";

type Options = {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  onDataChanged: (data: Uint8Array) => any;
  paintSettings: PaintingSettings;
};

export const createPainter = ({ canvas, width, height, paintSettings, onDataChanged }: Options) => {
  const app = new Application({
    view: canvas,
    backgroundColor: 0x00ffff,
    antialias: false,
  });

  // These can change over time
  let settings = paintSettings;
  const updateSettings = (s: PaintingSettings) => (settings = s);

  // The main data buffer
  const buffer = createBuffer(width, height);

  // Rendering buffer to the screen
  const sprite = new Sprite(buffer.getTexture());
  sprite.interactive = true;

  let isPointerDown = false;
  const paint = (e: PIXI.interaction.InteractionEvent) => {
    if (!isPointerDown) return;
    const local = sprite.transform.worldTransform.applyInverse(e.data.global);
    const px = Math.max(0, Math.min(Math.floor(local.x), width - 1));
    const py = Math.max(0, Math.min(Math.floor(local.y), height - 1));
    buffer.paint(
      px,
      py,
      settings.bushSize,
      settings.brushColor.r,
      settings.brushColor.g,
      settings.brushColor.b
    );
    sprite.texture = buffer.getTexture();
  };

  // Drawing to the buffer
  sprite.addListener("pointerdown", e => {
    isPointerDown = true;
    paint(e);
  });
  sprite.addListener("pointermove", paint);
  sprite.addListener("pointerup", () => {
    if (!isPointerDown) return;
    isPointerDown = false;
    onDataChanged(buffer.getRGBData());
  });
  sprite.addListener("pointerupoutside", () => {
    if (!isPointerDown) return;
    isPointerDown = false;
    onDataChanged(buffer.getRGBData());
  });
  app.stage.addChild(sprite);

  return {
    resize: (width: number, height: number, scaleX: number, scaleY: number) => {
      app.renderer.resize(width, height);
      app.stage.scale.set(scaleX, scaleY);
    },
    updateSettings,
    destroy: () => {
      app.destroy();
    },
  };
};

const randomByte = () => Math.floor(Math.random() * 256);

const createBuffer = (width: number, height: number) => {
  const rdbaData = new Uint8Array(width * height * 4);

  const getTexture = () =>
    Texture.fromBuffer(rdbaData, width, height, { scaleMode: SCALE_MODES.NEAREST });

  const getPixelIndex = (x: number, y: number) => y * width * 4 + x * 4;

  const getRGBData = () => dropAlphaChannel(rdbaData);

  const fillRandom = () => {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = getPixelIndex(x, y);
        rdbaData[index + 0] = randomByte();
        rdbaData[index + 1] = randomByte();
        rdbaData[index + 2] = randomByte();
        rdbaData[index + 3] = 255;
      }
    }
  };

  const fill = (r: number, g: number, b: number) => {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = getPixelIndex(x, y);
        rdbaData[index + 0] = r;
        rdbaData[index + 1] = g;
        rdbaData[index + 2] = b;
        rdbaData[index + 3] = 255;
      }
    }
  };

  const isOutOfBounds = (x: number, y: number) => {
    if (x < 0 || x >= width) return true;
    if (y < 0 || y >= height) return true;
    return false;
  };

  const setPixel = (x: number, y: number, r: number, g: number, b: number) => {
    if (isOutOfBounds(x, y)) throw new Error(`pixel out of bounds`);
    if (r < 0 || r >= 256) throw new Error(`red out of bounds`);
    if (g < 0 || g >= 256) throw new Error(`green out of bounds`);
    if (b < 0 || b >= 256) throw new Error(`blue out of bounds`);
    const index = getPixelIndex(x, y);
    rdbaData[index + 0] = r;
    rdbaData[index + 1] = g;
    rdbaData[index + 2] = b;
    rdbaData[index + 3] = 255;
  };

  const paint = (x: number, y: number, size: number, r: number, g: number, b: number) => {
    for (let iy = 0; iy < size; iy++) {
      for (let ix = 0; ix < size; ix++) {
        const px = Math.round(ix + x - size / 2);
        const py = Math.round(iy + y - size / 2);
        if (isOutOfBounds(px, py)) continue;
        setPixel(px, py, r, g, b);
      }
    }
  };

  fill(0, 0, 0);

  return {
    fillRandom,
    fill,
    paint,
    getTexture,
    getRGBData,
    setPixel,
  };
};

export type Painter = ReturnType<typeof createPainter>;
