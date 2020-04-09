import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { Horizontal, Vertical, VerticalSpacer } from "gls/lib";
import { Button, PageHeader, Divider } from "antd";
import { BuildOutlined, HighlightOutlined } from "@ant-design/icons";
import { Label } from "../../components/label/Label";

interface Props {
  onOpenPage: (name: string) => any;
  runningAppName: string | undefined;
  command: string | undefined | null;
  onStopApp: () => any;
  onCancelCommand: () => any;
}

export const AppsPageContent: React.FC<Props> = ({
  onOpenPage,
  runningAppName,
  onCancelCommand,
  command,
  onStopApp,
}) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <PageHeader
        ghost={false}
        //onBack={() => window.history.back()}
        title="Apps"
        //subTitle="This is a subtitle"
      ></PageHeader>
      <Vertical spacing={5}>
        <Label>RUNNING APP</Label>
        <div>{runningAppName ? runningAppName : "NONE"}</div>
        {runningAppName && (
          <Button onClick={onStopApp} type="danger" style={{ width: 200 }}>
            Stop
          </Button>
        )}
      </Vertical>

      <VerticalSpacer space={20} />

      <Vertical spacing={5}>
        <Label>command</Label>
        <div>{command ? command : "NONE"}</div>
        {command && (
          <Button onClick={onCancelCommand} type="danger" style={{ width: 200 }}>
            Cancel
          </Button>
        )}
      </Vertical>

      <VerticalSpacer space={20} />
      <Label>APPs</Label>
      <Horizontal spacing={20}>
        <Button
          type="primary"
          style={{ width: 100, height: 100 }}
          onClick={() => onOpenPage(`rpi-demos`)}
        >
          <Vertical horizontalAlign="center" verticalAlign="center">
            <BuildOutlined style={{ fontSize: "2em" }} />
            RPI Demos
          </Vertical>
        </Button>
        <Button
          type="primary"
          style={{ width: 100, height: 100 }}
          onClick={() => onOpenPage(`paint`)}
        >
          <Vertical horizontalAlign="center" verticalAlign="center">
            <HighlightOutlined style={{ fontSize: "2em" }} />
            Paint
          </Vertical>
        </Button>
      </Horizontal>
    </Segment>
  );
};
