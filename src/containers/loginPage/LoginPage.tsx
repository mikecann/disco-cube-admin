import * as React from "react";
import { Vertical } from "gls/lib";
import { LoginContent } from "./LoginContent";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { useStore } from "effector-react";
import { authStore, loginEffect } from "../../features/auth/auth";

interface Props {}

export const LoginPage: React.FC<Props> = ({}) => {
  const { isLoggingIn, user } = useStore(authStore);

  if (user) return <Redirect to={routes.stats.path()} />;

  return (
    <Vertical horizontalAlign="center" verticalAlign="center" minHeight="100vh">
      <LoginContent loading={isLoggingIn} onLogin={loginEffect} />
    </Vertical>
  );
};
