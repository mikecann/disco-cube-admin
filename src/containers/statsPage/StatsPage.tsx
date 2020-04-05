import * as React from "react";
import { Page } from "../../components/page/Page";
import { useStore } from "effector-react";
import { authStore } from "../../features/auth/auth";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { cubeStore, fullSystemInfoStore, essentialStatsStore } from "../../features/cube/cube";
import { StatsPageContent } from "./StatsPageContent";

interface Props {}

export const StatsPage: React.FC<Props> = ({}) => {
  const { user } = useStore(authStore);
  const cube = useStore(cubeStore);
  const fullSystemInfo = useStore(fullSystemInfoStore);
  const essential = useStore(essentialStatsStore);

  if (!user) return <Redirect to={routes.login.path()} />;

  return (
    <Page>
      <StatsPageContent
        isConnected={cube.status === "online"}
        statusChangedAt={cube.statusChangedAt}
        cpuLoadsPercent={essential.cpuLoadsPercent}
        memUsagePercent={essential.memUsagePercent}
        allSystemInfo={fullSystemInfo}
        batteryPercentage={essential.batteryLevelPercentage}
        cpuTemperature={essential.cpuTemperature}
      />
    </Page>
  );
};
