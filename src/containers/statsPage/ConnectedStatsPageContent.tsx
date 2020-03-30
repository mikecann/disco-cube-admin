import * as React from "react";
import { StatsPageContent } from "./StatsPageContent";
import { useStore } from "effector-react";
import { authStore, logoutEffect } from "../../features/auth/auth";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { cubeStore } from "../../features/cube/cube";

interface Props {}

export const ConnectedStatsPageContent: React.FC<Props> = ({}) => {
  const { user } = useStore(authStore);
  const { isConnected } = useStore(cubeStore);

  if (!user) return <Redirect to={routes.login.path()} />;

  return <StatsPageContent isConnected={isConnected} onLogout={() => logoutEffect()} />;
};
