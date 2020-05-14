import * as React from "react";
import { Segment } from "../../../../components/segment/Segment";
import { Vertical, VerticalSpacer } from "gls/lib";
import { Button, PageHeader, Select } from "antd";
import { randomOne } from "../../../../features/utils/misc";

interface Props {
  onBack: () => any;
  onStartCubemap: (options: { cubemapId: string }) => any;
  onStopCubemap: () => any;
  isRunning: boolean;
  isCommand: boolean;
}

const cubemaps = [`cubemap0.png`, `cubemap1.png`, `cubemap2.png`, `cubemap3.png`];

export const CubemapApp: React.FC<Props> = ({
  onBack,
  onStartCubemap,
  isRunning,
  onStopCubemap,
  isCommand,
}) => {
  const [selected, setSelected] = React.useState(randomOne(cubemaps));

  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <PageHeader ghost={false} onBack={onBack} title="Apps" subTitle="Cubemap"></PageHeader>
      <VerticalSpacer space={10} />
      <Vertical spacing={20}>
        <Select defaultValue={selected} value={selected} onChange={value => setSelected(value)}>
          {Object.values(cubemaps).map(id => (
            <Select.Option key={id} value={id}>
              {id}
            </Select.Option>
          ))}
        </Select>
        {!isRunning && (
          <Button
            type="primary"
            disabled={isCommand}
            onClick={() => onStartCubemap({ cubemapId: selected })}
          >
            Start
          </Button>
        )}
        {isRunning && (
          <Button type="danger" onClick={onStopCubemap}>
            Stop
          </Button>
        )}
      </Vertical>
    </Segment>
  );
};
