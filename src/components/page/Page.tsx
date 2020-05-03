import * as React from "react";
import { Stretch, Vertical } from "gls/lib";
import { ConnectedFooter } from "../footer/ConnectedFooter";
import { AuthRequired } from "../authRequired/AuthRequired";
import { ConnectedCubeNotConnectedBanner } from "../cubeNotConnectedBanner/ConnectedCubeNotConnectedBanner";
import Div100vh from "react-div-100vh";

interface Props {}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <Div100vh
      style={{
        //minWidth: "100hw",
        minHeight: "100rvh",
        backgroundColor: "#ccc",
        display: "flex",
        flexBasis: "auto",
        flexDirection: "column",
        flexShrink: 0,
        justifyContent: "center",
        padding: 10,
      }}
    >
      <AuthRequired />
      <ConnectedCubeNotConnectedBanner />
      <Stretch width="100%" horizontalAlign="center" scroll="overflow">
        {children}
      </Stretch>
      <Vertical horizontalAlign="center" width="100%" style={{ marginTop: 10 }}>
        <ConnectedFooter />
      </Vertical>
    </Div100vh>
  );
};

/*style={{
        minWidth: "100hw",
        minHeight: "100rvh",
        backgroundColor: "#ccc",
      }}

      display: flex;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
      */
