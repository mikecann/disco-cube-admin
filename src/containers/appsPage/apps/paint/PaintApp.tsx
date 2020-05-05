import * as React from "react";
import { VerticalSpacer, Vertical } from "gls/lib";
import { PageHeader, Button, Tabs } from "antd";
import { Segment } from "../../../../components/segment/Segment";
import { PaintCanvas } from "./PaintCanvas";
import { PaintControls } from "./PaintControls";
import { PaintingSettings } from "./types";
import { PaintAppState } from "../../../../sharedTypes";
import { narray } from "../../../../features/utils/misc";

interface Props {
  onBack: () => any;
  onStart: (options: {}) => any;
  onStop: () => any;
  isRunning: boolean;
  isCommand: boolean;
  onAppStateUpdated: (newState: PaintAppState) => any;
}

export const PaintApp: React.FC<Props> = ({
  onBack,
  isRunning,
  isCommand,
  onStart,
  onAppStateUpdated,
  onStop,
}) => {
  const [settings, setSettings] = React.useState<PaintingSettings>({
    bushSize: 1,
    brushColor: { r: 255, g: 0, b: 0 },
  });

  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <PageHeader
        ghost={false}
        onBack={onBack}
        title="Apps"
        subTitle={"PAINT"}
        extra={[
          isRunning ? (
            <Button key="stop" type="danger" onClick={onStop}>
              Stop
            </Button>
          ) : (
            <Button key="start" type="primary" disabled={isCommand} onClick={() => onStart({})}>
              start
            </Button>
          ),
        ]}
      ></PageHeader>
      <VerticalSpacer space={10} />
      {isRunning && (
        <Vertical spacing={10}>
          <PaintControls settings={settings} onSettingsChange={setSettings} />
          <Tabs
            tabBarStyle={{ textAlign: "center", marginTop: 0 }}
            size="large"
            tabPosition="bottom"
            type="card"
          >
            {narray(6).map(i => (
              <Tabs.TabPane tab={i + ""} key={i + ""}>
                <PaintCanvas
                  width={64}
                  height={64}
                  settings={settings}
                  onDataChanged={data => onAppStateUpdated({ face: i, data })}
                />
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Vertical>
      )}
    </Segment>
  );
};
