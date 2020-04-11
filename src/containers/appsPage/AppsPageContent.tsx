import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { Horizontal, Vertical, VerticalSpacer, Grid } from "gls/lib";
import { Button, PageHeader, Divider } from "antd";
import { BuildOutlined, HighlightOutlined, BugOutlined } from "@ant-design/icons";
import { Label } from "../../components/label/Label";
import { apps } from "./AppsPage";

interface Props {
  onOpenPage: (name: string) => any;
  runningAppName: string | undefined;
  command: string | undefined | null;
  onStopApp: () => any;
  onCancelCommand: () => any;
}

const iconStyles: React.CSSProperties = { fontSize: "2em" };

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
      <Grid spacing={20}>
        {Object.entries(apps).map(([key, { path, icon: Icon, label }]) => (
          <Button
            key={key}
            type="primary"
            style={{ width: 100, height: 100 }}
            onClick={() => onOpenPage(path)}
          >
            <Vertical horizontalAlign="center" verticalAlign="center" spacing={8}>
              <Icon style={iconStyles} />
              <div>{label}</div>
            </Vertical>
          </Button>
        ))}
      </Grid>
    </Segment>
  );
};
