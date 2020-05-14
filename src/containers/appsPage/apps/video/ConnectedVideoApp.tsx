import * as React from "react";
import { useHistory } from "react-router";
import { VideoApp } from "./VideoApp";
import { useStore } from "effector-react";
import { runningAppStore, sendAppCommand, appsCommandStore } from "../../../../features/apps/apps";
import { StartAppCommand, StopAppCommand } from "../../../../sharedTypes";

interface Props {}

export const ConnectedVideoApp: React.FC<Props> = ({}) => {
  const history = useHistory();
  const runningApp = useStore(runningAppStore);
  const appsCommand = useStore(appsCommandStore);
  return (
    <VideoApp
      onBack={history.goBack}
      isRunning={runningApp != null}
      isCommand={appsCommand != null}
      onStopVideo={() => sendAppCommand(StopAppCommand({}))}
      onStartVideo={({ videoId }) =>
        sendAppCommand(StartAppCommand({ name: "video", args: [videoId] }))
      }
    />
  );
};
