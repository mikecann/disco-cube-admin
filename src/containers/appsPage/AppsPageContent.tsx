import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { Horizontal, Vertical, VerticalSpacer } from "gls/lib";
import { Button } from "antd";
import { BuildOutlined, HighlightOutlined } from "@ant-design/icons";

interface Props {}

export const AppsPageContent: React.FC<Props> = ({}) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <h1>Apps Page</h1>
      <Vertical>
        <div>Running App: NONE</div>
      </Vertical>
      <VerticalSpacer space={10} />
      <Horizontal spacing={20}>
        <Button type="primary" style={{ width: 100, height: 100 }}>
          <Vertical horizontalAlign="center" verticalAlign="center">
            <BuildOutlined style={{ fontSize: "2em" }} />
            RPI Demos
          </Vertical>
        </Button>
        <Button type="primary" style={{ width: 100, height: 100 }}>
          <Vertical horizontalAlign="center" verticalAlign="center">
            <HighlightOutlined style={{ fontSize: "2em" }} />
            Paint
          </Vertical>
        </Button>
      </Horizontal>
    </Segment>
  );
};
