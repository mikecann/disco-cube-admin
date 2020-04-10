import * as React from "react";
import { Vertical, Stretch } from "gls/lib";
import { ConnectedFooter } from "../footer/ConnectedFooter";
import { AuthRequired } from "../authRequired/AuthRequired";
import { ConnectedCubeNotConnectedBanner } from "../cubeNotConnectedBanner/ConnectedCubeNotConnectedBanner";

interface Props {}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <Vertical
      horizontalAlign="center"
      verticalAlign="center"
      height="100vh"
      padding={10}
      spacing={10}
    >
      <AuthRequired />
      <ConnectedCubeNotConnectedBanner />
      <Stretch width="100%" horizontalAlign="center" scroll="overflow">
        {children}
      </Stretch>
      <ConnectedFooter />
    </Vertical>
  );
};
