import * as React from "react";
import useComponentSize from "@rehooks/component-size";
import { Painter, createPainter } from "./createPainter";
import { debounce } from "throttle-debounce";
import { PaintingSettings } from "./types";

interface Props {
  width: number;
  height: number;
  onDataChanged: (data: Uint8Array) => any;
  settings: PaintingSettings;
}

export const PaintCanvas: React.FC<Props> = ({ width, height, onDataChanged, settings }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const containerSize = useComponentSize(containerRef);
  const [painter, setPainter] = React.useState<Painter>();

  function onRef(canvas: HTMLCanvasElement | null) {
    if (painter) return;
    if (!canvas) return;
    setPainter(createPainter({ canvas, width, height, onDataChanged, paintSettings: settings }));
  }

  React.useEffect(() => {
    if (!painter) return;
    const scale = containerSize.width / width;
    painter.resize(containerSize.width, containerSize.width, scale, scale);
  }, [containerSize, painter]);

  React.useEffect(() => {
    if (!painter) return;
    return () => painter.destroy();
  }, [painter]);

  React.useEffect(() => {
    if (!painter) return;
    painter.updateSettings(settings);
  }, [settings]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <canvas ref={onRef} />
    </div>
  );
};
