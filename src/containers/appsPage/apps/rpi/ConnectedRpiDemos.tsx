import * as React from "react";
import { useHistory } from "react-router";
import { RPIDemos } from "./RPIDemos";
import { useStore } from "effector-react";
import { runningAppStore, sendAppCommand, appsCommandStore } from "../../../../features/apps/apps";
import { StartRPIDemosCommand, StopRunningAppCommand } from "../../../../sharedTypes";

interface Props {}

export const ConnectedRpiDemos: React.FC<Props> = ({}) => {
  const history = useHistory();
  const runningApp = useStore(runningAppStore);
  const appsCommand = useStore(appsCommandStore);
  return (
    <RPIDemos
      onBack={history.goBack}
      isRunning={runningApp != null}
      isCommand={appsCommand != null}
      onStopDemo={() => sendAppCommand(StopRunningAppCommand({}))}
      onStartDemo={({ demoId }) => sendAppCommand(StartRPIDemosCommand({ demoId }))}
    />
  );
};
