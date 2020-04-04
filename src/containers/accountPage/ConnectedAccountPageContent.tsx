import * as React from "react";
import { useStore } from "effector-react";
import { authStore, logoutEffect } from "../../features/auth/auth";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { AccountPageContent } from "./AccountPageContent";

interface Props {}

export const ConnectedAccountPageContent: React.FC<Props> = ({}) => {
  const { user } = useStore(authStore);
  if (!user) return <Redirect to={routes.login.path()} />;

  return <AccountPageContent userEmail={user.email + ""} onLogout={() => logoutEffect()} />;
};
