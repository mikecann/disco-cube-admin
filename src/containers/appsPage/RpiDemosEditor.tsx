import * as React from "react";
import { Vertical } from "gls/lib";
import { Button, Select } from "antd";

interface Props {}

export const RpiDemosEditor: React.FC<Props> = ({}) => {
  return (
    <Vertical spacing={20}>
      <Select defaultValue="D0">
        {Array(11)
          .fill(0)
          .map((_, i) => (
            <Select.Option value={`D${i}`}>Demo {i}</Select.Option>
          ))}
      </Select>
      <Button type="primary">Start</Button>
    </Vertical>
  );
};
