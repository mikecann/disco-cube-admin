import * as React from "react";
import { Page } from "../../components/page/Page";
import { useRouteMatch, Route, Switch } from "react-router";
import { ConnectedRpiDemos } from "./ConnectedRpiDemos";
import { ConnectedAppsPageContent } from "./ConnectedAppsPageContent";
import { ConnectedPaintApp } from "./ConnectedPaintApp";

interface Props {}

export const AppsPage: React.FC<Props> = ({}) => {
  const match = useRouteMatch();

  const homePath = `${match.path}`;
  const rpiDemosPath = `${match.path}/rpi-demos`;
  const paintAppPath = `${match.path}/paint`;

  return (
    <Page>
      <Switch>
        <Route exact path={homePath}>
          <ConnectedAppsPageContent />
        </Route>
        <Route path={rpiDemosPath}>
          <ConnectedRpiDemos />
        </Route>
        <Route path={paintAppPath}>
          <ConnectedPaintApp />
        </Route>
      </Switch>
    </Page>
  );
};
