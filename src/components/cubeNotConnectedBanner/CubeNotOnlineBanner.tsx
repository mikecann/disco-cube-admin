import * as React from "react";
import { Alert } from "antd";
import { Vertical } from "gls/lib";

interface Props {
  isOnline: boolean;
}

export const CubeNotOnlineBanner: React.FC<Props> = ({ isOnline }) => {
  return (
    <Vertical
      style={{
        position: "absolute",
        top: 10,
        width: "100%",
        zIndex: 100,
        display: isOnline ? "none" : undefined,
      }}
      horizontalAlign="center"
    >
      <Alert message="Cube is not online" type="error" showIcon style={{ width: 300 }} />
    </Vertical>
  );
};
