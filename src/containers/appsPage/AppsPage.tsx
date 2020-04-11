import * as React from "react";
import { Page } from "../../components/page/Page";
import { useRouteMatch, Route, Switch } from "react-router";
import { ConnectedRpiDemos } from "./apps/rpi/ConnectedRpiDemos";
import { ConnectedAppsPageContent } from "./ConnectedAppsPageContent";
import { AppNames } from "../../sharedTypes";
import { ConnectedCommonApp } from "./apps/common/ConnectedSparkleApp";
import {
  BuildOutlined,
  HighlightOutlined,
  BugOutlined,
  SmallDashOutlined,
} from "@ant-design/icons";
import { AntdIconProps } from "../../../node_modules/@ant-design/icons/lib/components/AntdIcon";

interface Props {}

export const apps: Record<
  AppNames,
  {
    path: string;
    render: () => React.ReactNode;
    label: string;
    icon: React.ForwardRefExoticComponent<AntdIconProps & React.RefAttributes<HTMLSpanElement>>;
  }
> = {
  rpiDemos: {
    path: `/rpi-demos`,
    label: "RPI Demos",
    icon: BuildOutlined,
    render: () => <ConnectedRpiDemos />,
  },
  paint: {
    path: `/paint`,
    label: "Paint",
    icon: HighlightOutlined,
    render: () => <ConnectedCommonApp appName={`paint`} />,
  },
  debug: {
    path: `/debug`,
    label: "Debug",
    icon: BugOutlined,
    render: () => <ConnectedCommonApp appName={`debug`} />,
  },
  sparkle: {
    path: `/sparkle`,
    label: "Sparkle",
    icon: SmallDashOutlined,
    render: () => <ConnectedCommonApp appName={`sparkle`} />,
  },
};

export const AppsPage: React.FC<Props> = ({}) => {
  const match = useRouteMatch();

  return (
    <Page>
      <Switch>
        <Route exact path={match.path}>
          <ConnectedAppsPageContent />
        </Route>
        {Object.entries(apps).map(([key, { path, render }]) => (
          <Route key={key} path={`${match.path}${path}`}>
            {render()}
          </Route>
        ))}
      </Switch>
    </Page>
  );
};
