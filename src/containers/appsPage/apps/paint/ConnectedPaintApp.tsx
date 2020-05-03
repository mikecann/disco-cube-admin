import * as React from "react";
import { useHistory } from "react-router";
import { PaintApp } from "./PaintApp";
import { useStore } from "effector-react";
import { runningAppStore, appsCommandStore, sendAppCommand } from "../../../../features/apps/apps";
import {
  StopAppCommand,
  StartAppCommand,
  PaintAppState,
  UpdateAppState,
} from "../../../../sharedTypes";

interface Props {}

export const ConnectedPaintApp: React.FC<Props> = ({}) => {
  const history = useHistory();
  const runningApp = useStore(runningAppStore);
  const appsCommand = useStore(appsCommandStore);
  return (
    <PaintApp
      onBack={history.goBack}
      isRunning={runningApp != null}
      isCommand={appsCommand != null}
      onStop={() => sendAppCommand(StopAppCommand({}))}
      onStart={({}) => sendAppCommand(StartAppCommand({ name: `paint`, args: [] }))}
      state={PaintAppState({ faces: [] })}
      onAppStateUpdated={state => sendAppCommand(UpdateAppState({ app: "paint", state }))}
    />
  );
};
