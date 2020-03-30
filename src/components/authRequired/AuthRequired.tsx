import * as React from "react";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { useStore } from "effector-react";
import { authStore } from "../../features/auth/auth";

interface Props {}

export const AuthRequired: React.FC<Props> = ({}) => {
  const { user } = useStore(authStore);
  if (!user) return <Redirect to={routes.login.path()} />;
  return null;
};
