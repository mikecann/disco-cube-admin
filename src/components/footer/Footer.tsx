import * as React from "react";
import { Segment } from "../segment/Segment";
import { Menu } from "antd";
import { CodeOutlined, ControlOutlined } from "@ant-design/icons";
import { Horizontal } from "gls/lib";
import { routes } from "../../routes";

interface Props {
  currentPath: string;
  onGotoPath: (path: string) => any;
}

export const Footer: React.FC<Props> = ({ currentPath, onGotoPath }) => {
  return (
    <Segment style={{ padding: 8 }} spacing={10} width="100%" maxWidth={900}>
      <Horizontal horizontalAlign="center">
        <Menu selectedKeys={[currentPath]} mode="horizontal">
          <Menu.Item key="/stats" onClick={() => onGotoPath(routes.stats.path())}>
            <ControlOutlined style={{ fontSize: "1.75em" }} />
          </Menu.Item>
          <Menu.Item key="/terminal" onClick={() => onGotoPath(routes.terminal.path())}>
            <CodeOutlined style={{ fontSize: "1.75em" }} />
          </Menu.Item>
        </Menu>
      </Horizontal>
    </Segment>
  );
};
