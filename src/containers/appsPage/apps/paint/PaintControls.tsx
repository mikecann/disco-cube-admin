import * as React from "react";
import { Horizontal, Vertical } from "gls/lib";
import { PaintingSettings } from "./types";
import { Slider } from "antd";
import { SketchPicker } from "react-color";

interface Props {
  settings: PaintingSettings;
  onSettingsChange: (settings: PaintingSettings) => any;
}

export const PaintControls: React.FC<Props> = ({ settings, onSettingsChange }) => {
  const [pickerVisible, setPickerVisible] = React.useState(false);

  const sizeRatio = settings.bushSize / 10;
  return (
    <Horizontal verticalAlign="center" spacing={20}>
      <Slider
        style={{ width: "100%" }}
        value={settings.bushSize}
        min={1}
        max={10}
        onChange={v => onSettingsChange({ ...settings, bushSize: Array.isArray(v) ? 0 : v })}
      />
      <Vertical
        style={{
          width: 40,
          height: 40,
          position: "relative",
        }}
        horizontalAlign="center"
        verticalAlign="center"
        onClick={() => setPickerVisible(true)}
      >
        <div
          style={{
            width: 40 * sizeRatio,
            height: 40 * sizeRatio,
            borderRadius: "0.5em",

            backgroundColor: `rgb(${settings.brushColor.r}, ${settings.brushColor.g}, ${settings.brushColor.b})`,
          }}
        ></div>
        {pickerVisible && (
          <div style={{ position: "absolute", top: -0, right: -0, zIndex: 10000 }}>
            <div
              style={{
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              }}
              onClick={e => {
                setPickerVisible(false);
                e.stopPropagation();
                e.preventDefault();
                return false;
              }}
            ></div>
            <SketchPicker
              color={settings.brushColor}
              onChange={color => onSettingsChange({ ...settings, brushColor: color.rgb })}
            />
          </div>
        )}
      </Vertical>
    </Horizontal>
  );
};
