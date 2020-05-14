import * as React from "react";
import { createScene, DebugScene } from "./scene";

interface Props {}

export const DebugCubeCanvas: React.FC<Props> = ({}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scene, setScene] = React.useState<DebugScene>();

  function onRef(canvas: HTMLCanvasElement | null) {
    if (scene) return;
    if (!canvas) return;
    setScene(createScene({ canvas }));
  }

  React.useEffect(() => {
    if (!scene) return;
    return () => scene.destroy();
  });

  return (
    <div
      ref={containerRef}
      style={{
        width: 500,
        height: 500,
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
