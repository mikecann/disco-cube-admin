import * as React from "react";
import { Segment } from "../../../../components/segment/Segment";
import { Vertical, VerticalSpacer } from "gls/lib";
import { Button, PageHeader, Select } from "antd";

interface Props {
  onBack: () => any;
  onStartDemo: (options: { demoId: string }) => any;
  onStopDemo: () => any;
  isRunning: boolean;
  isCommand: boolean;
}

const Demo = (o: { description: string; disabled: boolean }) => {
  return { ...o } as const;
};
interface Demo extends ReturnType<typeof Demo> {}

const demos = {
  D0: Demo({ description: `some rotating square`, disabled: false }),
  D1: Demo({ description: `forward scrolling an image`, disabled: true }),
  D2: Demo({ description: `backward scrolling an image`, disabled: true }),
  D3: Demo({ description: `test image: a square`, disabled: false }),
  D4: Demo({ description: `pulsing color`, disabled: false }),
  D5: Demo({ description: `greyscale block`, disabled: false }),
  D6: Demo({ description: `abelian sandpiule model`, disabled: false }),
  D7: Demo({ description: `conway's game of life`, disabled: false }),
  D8: Demo({ description: `langton's ant`, disabled: false }),
  D9: Demo({ description: `volume bars`, disabled: false }),
  D10: Demo({ description: `evolution of color`, disabled: false }),
  D11: Demo({ description: `brightness pulse generator`, disabled: false }),
};

export const RPIDemos: React.FC<Props> = ({
  onBack,
  onStartDemo,
  isRunning,
  onStopDemo,
  isCommand,
}) => {
  const [selectedDemoId, setSelectedDemoId] = React.useState(`D0`);

  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <PageHeader ghost={false} onBack={onBack} title="Apps" subTitle="RPI Demos"></PageHeader>
      <VerticalSpacer space={10} />
      <Vertical spacing={20}>
        <Select
          defaultValue={selectedDemoId}
          value={selectedDemoId}
          onChange={value => setSelectedDemoId(value)}
        >
          {Object.keys(demos).map(id => (
            <Select.Option key={id} value={id} disabled={(demos as any)[id].disabled}>
              {id} - {(demos as any)[id].description}
            </Select.Option>
          ))}
        </Select>
        {!isRunning && (
          <Button
            type="primary"
            disabled={isCommand}
            onClick={() => onStartDemo({ demoId: selectedDemoId })}
          >
            Start
          </Button>
        )}
        {isRunning && (
          <Button type="danger" onClick={onStopDemo}>
            Stop
          </Button>
        )}
      </Vertical>
    </Segment>
  );
};
