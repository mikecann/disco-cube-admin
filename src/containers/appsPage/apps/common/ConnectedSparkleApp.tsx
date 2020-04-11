import * as React from "react";
import { useHistory } from "react-router";
import { CommonApp } from "./CommonApp";
import { useStore } from "effector-react";
import { runningAppStore, appsCommandStore, sendAppCommand } from "../../../../features/apps/apps";
import { StopAppCommand, StartAppCommand, AppNames } from "../../../../sharedTypes";

interface Props {
  appName: AppNames;
}

export const ConnectedCommonApp: React.FC<Props> = ({ appName }) => {
  const history = useHistory();
  const runningApp = useStore(runningAppStore);
  const appsCommand = useStore(appsCommandStore);
  return (
    <CommonApp
      appName={appName}
      onBack={history.goBack}
      isRunning={runningApp != null}
      isCommand={appsCommand != null}
      onStop={() => sendAppCommand(StopAppCommand({}))}
      onStart={({}) => sendAppCommand(StartAppCommand({ name: appName, args: [] }))}
    />
  );
};
