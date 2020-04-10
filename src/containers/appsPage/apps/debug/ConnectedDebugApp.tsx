import * as React from "react";
import { useHistory } from "react-router";
import { DebugApp } from "./DebugApp";
import { useStore } from "effector-react";
import { runningAppStore, appsCommandStore, sendAppCommand } from "../../../../features/apps/apps";
import { StopRunningAppCommand, StartDebugAppCommand } from "../../../../sharedTypes";

interface Props {}

export const ConnectedDebugApp: React.FC<Props> = ({}) => {
  const history = useHistory();
  const runningApp = useStore(runningAppStore);
  const appsCommand = useStore(appsCommandStore);
  return (
    <DebugApp
      onBack={history.goBack}
      isRunning={runningApp != null}
      isCommand={appsCommand != null}
      onStop={() => sendAppCommand(StopRunningAppCommand({}))}
      onStart={({}) => sendAppCommand(StartDebugAppCommand({}))}
    />
  );
};
