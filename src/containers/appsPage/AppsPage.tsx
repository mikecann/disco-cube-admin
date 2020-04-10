import * as React from "react";
import { Page } from "../../components/page/Page";
import { useRouteMatch, Route, Switch } from "react-router";
import { ConnectedRpiDemos } from "./apps/rpi/ConnectedRpiDemos";
import { ConnectedAppsPageContent } from "./ConnectedAppsPageContent";
import { ConnectedPaintApp } from "./apps/paint/ConnectedPaintApp";
import { ConnectedDebugApp } from "./apps/debug/ConnectedDebugApp";

interface Props {}

const apps = {
  rpiDemos: {
    path: `/rpi-demos`,
    component: ConnectedRpiDemos,
  },
  paint: {
    path: `/paint`,
    component: ConnectedPaintApp,
  },
  debug: {
    path: `/debug`,
    component: ConnectedDebugApp,
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
        {Object.entries(apps).map(([key, { path, component: Component }]) => (
          <Route key={key} path={`${match.path}${path}`}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Page>
  );
};
