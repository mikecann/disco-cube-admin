import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { PageHeader, Statistic, Button, Progress } from "antd";
import { Vertical, VerticalSpacer } from "gls/lib";

interface Props {
  onLogout: () => any;
  userEmail: string;
}

export const AccountPageContent: React.FC<Props> = ({ onLogout, userEmail }) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"} scroll="vertical">
      <h1>Account</h1>
      <Vertical>
        <label style={{ fontWeight: "bold" }}>Email</label>
        <span>{userEmail}</span>
      </Vertical>
      <VerticalSpacer space={20} />
      <Button type="primary" onClick={onLogout}>
        Logout
      </Button>
    </Segment>
  );
};
