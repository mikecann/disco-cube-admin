import * as React from "react";
import { Page } from "../../components/page/Page";
import { AppsPageContent } from "./AppsPageContent";

interface Props {}

export const AppsPage: React.FC<Props> = ({}) => {
  return (
    <Page>
      <AppsPageContent />
    </Page>
  );
};
