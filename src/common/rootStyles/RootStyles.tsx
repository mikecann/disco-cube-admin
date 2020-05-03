import * as React from "react";
import { GLSDefaults } from "gls/lib";
import Div100vh from "react-div-100vh";

interface Props {}

export const RootStyles: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        minWidth: "100hw",
        minHeight: "100vh",
        backgroundColor: "#ccc",
      }}
    >
      <GLSDefaults.Provider value={{ verticalSpacing: 0, horizontalSpacing: 0 }}>
        {children}
      </GLSDefaults.Provider>
    </div>
  );
};
