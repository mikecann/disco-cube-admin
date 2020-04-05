import * as React from "react";

import { useStore } from "effector-react";
import { authStore, logoutEffect } from "../../features/auth/auth";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { AccountPageContent } from "./AccountPageContent";
import { Page } from "../../components/page/Page";

interface Props {}

export const AccountPage: React.FC<Props> = ({}) => {
  const { user } = useStore(authStore);
  if (!user) return <Redirect to={routes.login.path()} />;
  return (
    <Page>
      <AccountPageContent userEmail={user.email + ""} onLogout={() => logoutEffect()} />
    </Page>
  );
};
