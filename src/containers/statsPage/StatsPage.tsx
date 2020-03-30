import * as React from "react";
import { Vertical, Stretch } from "gls/lib";
import { ConnectedFooter } from "../../components/footer/ConnectedFooter";
import { AuthRequired } from "../../components/authRequired/AuthRequired";
import { ConnectedStatsPageContent } from "./ConnectedStatsPageContent";

interface Props {}

export const StatsPage: React.FC<Props> = ({}) => {
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
      <Stretch width="100%">
        <ConnectedStatsPageContent />
      </Stretch>
      <ConnectedFooter />
    </Vertical>
  );
};
