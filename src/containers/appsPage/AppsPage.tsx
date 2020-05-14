import * as React from "react";
import { Page } from "../../components/page/Page";
import { useRouteMatch, Route, Switch } from "react-router";
import { ConnectedRpiDemos } from "./apps/rpi/ConnectedRpiDemos";
import { ConnectedAppsPageContent } from "./ConnectedAppsPageContent";
import { AppNames } from "../../sharedTypes";
import { ConnectedCommonApp } from "./apps/common/ConnectedCommonApp";
import {
  BuildOutlined,
  HighlightOutlined,
  BugOutlined,
  SmallDashOutlined,
  VideoCameraOutlined,
  StarOutlined,
  PictureOutlined,
  MoreOutlined,
  DeploymentUnitOutlined,
  RotateRightOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { AntdIconProps } from "../../../node_modules/@ant-design/icons/lib/components/AntdIcon";
import { ConnectedPaintApp } from "./apps/paint/ConnectedPaintApp";
import { ConnectedVideoApp } from "./apps/video/ConnectedVideoApp";
import { ConnectedCubemapApp } from "./apps/cubemap/ConnectedCubemapApp";

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
  video: {
    path: `/video`,
    label: "Video",
    icon: VideoCameraOutlined,
    render: () => <ConnectedVideoApp />,
  },
  cubemap: {
    path: `/cubemap`,
    label: "Cubemap",
    icon: PictureOutlined,
    render: () => <ConnectedCubemapApp />,
  },
  paint: {
    path: `/paint`,
    label: "Paint",
    icon: HighlightOutlined,
    render: () => <ConnectedPaintApp />,
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
    icon: StarOutlined,
    render: () => <ConnectedCommonApp appName={`sparkle`} />,
  },
  sprinkles: {
    path: `/sprinkles`,
    label: "Sprinkles",
    icon: SmallDashOutlined,
    render: () => <ConnectedCommonApp appName={`sprinkles`} />,
  },
  particles: {
    path: `/particles`,
    label: "Particles",
    icon: MoreOutlined,
    render: () => <ConnectedCommonApp appName={`particles`} />,
  },
  particleFlow: {
    path: `/particleFlow`,
    label: "Particle Flow",
    icon: DeploymentUnitOutlined,
    render: () => <ConnectedCommonApp appName={`particleFlow`} />,
  },
  tilt: {
    path: `/tilt`,
    label: "Tilt",
    icon: RotateRightOutlined,
    render: () => <ConnectedCommonApp appName={`tilt`} />,
  },
  maze: {
    path: `/maze`,
    label: "Maze",
    icon: TableOutlined,
    render: () => <ConnectedCommonApp appName={`maze`} />,
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
