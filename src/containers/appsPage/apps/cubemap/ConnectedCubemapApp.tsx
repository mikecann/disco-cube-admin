import * as React from "react";
import { useHistory } from "react-router";
import { useStore } from "effector-react";
import { runningAppStore, sendAppCommand, appsCommandStore } from "../../../../features/apps/apps";
import { StartAppCommand, StopAppCommand } from "../../../../sharedTypes";
import { CubemapApp } from "./CubemapApp";

interface Props {}

export const ConnectedCubemapApp: React.FC<Props> = ({}) => {
  const history = useHistory();
  const runningApp = useStore(runningAppStore);
  const appsCommand = useStore(appsCommandStore);
  return (
    <CubemapApp
      onBack={history.goBack}
      isRunning={runningApp != null}
      isCommand={appsCommand != null}
      onStopCubemap={() => sendAppCommand(StopAppCommand({}))}
      onStartCubemap={({ cubemapId }) =>
        sendAppCommand(StartAppCommand({ name: "cubemap", args: [cubemapId] }))
      }
    />
  );
};
