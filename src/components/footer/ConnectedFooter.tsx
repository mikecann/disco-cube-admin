import * as React from "react";
import { useHistory, useLocation } from "react-router";
import { Footer } from "./Footer";

interface Props {}

export const ConnectedFooter: React.FC<Props> = ({}) => {
  const history = useHistory();
  const location = useLocation();

  return <Footer currentPath={location.pathname} onGotoPath={path => history.push(path)} />;
};
