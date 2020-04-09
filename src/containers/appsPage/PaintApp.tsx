import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { VerticalSpacer } from "gls/lib";
import { PageHeader } from "antd";

interface Props {
  onBack: () => any;
}

export const PaintApp: React.FC<Props> = ({ onBack }) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <PageHeader ghost={false} onBack={onBack} title="Apps" subTitle="Paint"></PageHeader>
      <VerticalSpacer space={10} />
    </Segment>
  );
};
