import * as React from "react";
import { Vertical, Stretch } from "gls/lib";
import { ConnectedFooter } from "../../components/footer/ConnectedFooter";
import { ConnectedTerminalContent } from "./ConnectedTerminalContent";
import { AuthRequired } from "../../components/authRequired/AuthRequired";

interface Props {}

export const TerminalPage: React.FC<Props> = ({}) => {
  return (
    <Vertical
      horizontalAlign="center"
      verticalAlign="center"
      height="100vh"
      padding={10}
      spacing={10}
    >
      <AuthRequired />
      <Stretch width="100%" horizontalAlign="center" scroll="overflow">
        <ConnectedTerminalContent />
      </Stretch>
      <ConnectedFooter />
    </Vertical>
  );
};
