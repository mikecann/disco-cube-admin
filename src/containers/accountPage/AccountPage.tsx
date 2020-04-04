import * as React from "react";
import { Vertical, Stretch } from "gls/lib";
import { ConnectedFooter } from "../../components/footer/ConnectedFooter";
import { AuthRequired } from "../../components/authRequired/AuthRequired";
import { ConnectedAccountPageContent } from "./ConnectedAccountPageContent";

interface Props {}

export const AccountPage: React.FC<Props> = ({}) => {
  return (
    <Vertical
      horizontalAlign="center"
      verticalAlign="center"
      height="100vh"
      width="100%"
      padding={10}
      spacing={10}
    >
      <AuthRequired />
      <Stretch width="100%" horizontalAlign="center" scroll="overflow">
        <ConnectedAccountPageContent />
      </Stretch>
      <ConnectedFooter />
    </Vertical>
  );
};
