import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { PageHeader, Statistic, Button } from "antd";
import { Stretch } from "gls/lib";

interface Props {
  onLogout: () => any;
  isConnected: boolean;
}

export const StatsPageContent: React.FC<Props> = ({ onLogout, isConnected }) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={900} height={"100%"} scroll="vertical">
      <PageHeader ghost={false} title="Disco Cube"></PageHeader>
      <Statistic
        title="Status"
        value={isConnected ? "Connected" : "Disconnected"}
        valueStyle={{ color: isConnected ? "#3f8600" : "#cf1322" }}
      />
      <Stretch />
      <Button onClick={onLogout}>Logout</Button>
    </Segment>
  );
};
