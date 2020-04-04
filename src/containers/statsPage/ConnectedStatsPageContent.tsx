import * as React from "react";
import { StatsPageContent } from "./StatsPageContent";
import { useStore } from "effector-react";
import { authStore, logoutEffect } from "../../features/auth/auth";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { cubeStore, fullSystemInfoStore, essentialStatsStore } from "../../features/cube/cube";

interface Props {}

export const ConnectedStatsPageContent: React.FC<Props> = ({}) => {
  const { user } = useStore(authStore);
  const cube = useStore(cubeStore);
  const fullSystemInfo = useStore(fullSystemInfoStore);
  const essential = useStore(essentialStatsStore);

  if (!user) return <Redirect to={routes.login.path()} />;

  return (
    <StatsPageContent
      isConnected={cube.status === "online"}
      statusChangedAt={cube.statusChangedAt}
      cpuLoadsPercent={essential.cpuLoadsPercent}
      memUsagePercent={essential.memUsagePercent}
      allSystemInfo={fullSystemInfo}
      batteryPercentage={essential.batteryLevelPercentage}
      cpuTemperature={essential.cpuTemperature}
    />
  );
};
