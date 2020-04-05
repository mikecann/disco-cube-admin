import * as React from "react";
import { Page } from "../../components/page/Page";
import { terminalStore, sendTerminalCommandEffect } from "../../features/terminal/terminal";
import { useStore } from "effector-react";
import { TerminalContent } from "./TerminalContent";

interface Props {}

export const TerminalPage: React.FC<Props> = ({}) => {
  const { history, status, cwd } = useStore(terminalStore);
  return (
    <Page>
      <TerminalContent
        cwd={cwd}
        status={status}
        history={history}
        onSendCommand={sendTerminalCommandEffect}
      />
    </Page>
  );
};
