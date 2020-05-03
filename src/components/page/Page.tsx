import * as React from "react";
import { Vertical, Stretch } from "gls/lib";
import { ConnectedFooter } from "../footer/ConnectedFooter";
import { AuthRequired } from "../authRequired/AuthRequired";
import { ConnectedCubeNotConnectedBanner } from "../cubeNotConnectedBanner/ConnectedCubeNotConnectedBanner";
import { useWindowSize } from "../../features/utils/useWindowSize";

interface Props {}

export const Page: React.FC<Props> = ({ children }) => {
  const { innerHeight } = useWindowSize();
  return (
    <Vertical
      horizontalAlign="center"
      verticalAlign="center"
      style={{ height: innerHeight }}
      padding={10}
      spacing={10}
    >
      <AuthRequired />
      <ConnectedCubeNotConnectedBanner />
      <div style={{ overflowY: "auto", height: innerHeight - 110, width: "100%", maxWidth: 500 }}>
        {children}
      </div>
      <ConnectedFooter />
    </Vertical>
  );
};
