import * as React from "react";
import { AppsPageContent } from "./AppsPageContent";
import { useHistory } from "react-router";
import { useStore } from "effector-react";
import {
  runningAppStore,
  sendAppCommand,
  appsCommandStore,
  cancelAppCommand,
} from "../../features/apps/apps";
import { StopRunningAppCommand } from "../../sharedTypes";

interface Props {}

export const ConnectedAppsPageContent: React.FC<Props> = ({}) => {
  const history = useHistory();
  const runningApp = useStore(runningAppStore);
  const command = useStore(appsCommandStore);

  return (
    <AppsPageContent
      onOpenPage={page => history.push(`/apps/${page}`)}
      runningAppName={runningApp?.name}
      onStopApp={() => sendAppCommand(StopRunningAppCommand({}))}
      command={command?.kind}
      onCancelCommand={() => cancelAppCommand({})}
    />
  );
};
