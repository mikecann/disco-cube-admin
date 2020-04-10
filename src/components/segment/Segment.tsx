import * as React from "react";
import { Vertical } from "gls/lib";

interface Props extends React.ComponentProps<typeof Vertical> {}

export const Segment: React.FC<Props> = ({ style, ...rest }) => {
  return (
    <Vertical
      style={{
        backgroundColor: "white",
        borderRadius: `.28571429rem`,
        padding: `1em 1em`,
        boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)",
        border: "1px solid rgba(34,36,38,.15)",
        overflowX: "hidden",
        ...style,
      }}
      {...rest}
    ></Vertical>
  );
};
