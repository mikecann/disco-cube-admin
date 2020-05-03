import * as React from "react";
import { GLSDefaults } from "gls/lib";
import Div100vh from "react-div-100vh";
import { useWindowSize } from "../../features/utils/useWindowSize";

interface Props {}

export const RootStyles: React.FC<Props> = ({ children }) => {
  const { innerHeight } = useWindowSize();
  return (
    <div
      style={{
        minWidth: "100hw",
        minHeight: innerHeight,
        backgroundColor: "#ccc",
      }}
    >
      <GLSDefaults.Provider value={{ verticalSpacing: 0, horizontalSpacing: 0 }}>
        {children}
      </GLSDefaults.Provider>
    </div>
  );
};
