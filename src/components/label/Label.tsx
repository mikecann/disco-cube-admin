import * as React from "react";

interface Props {}

export const Label: React.FC<Props> = ({ children }) => {
  return (
    <label style={{ color: "rgba(0, 0, 0, 0.45)", textTransform: "uppercase" }}>{children}</label>
  );
};
