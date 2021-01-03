import * as React from "react";
import { Page } from "../../components/page/Page";
import { terminalStore, sendTerminalCommandEffect } from "../../features/terminal/terminal";
import { useStore } from "effector-react";
import { TerminalContent } from "./TerminalContent";

interface Props {}

export const TerminalPage: React.FC<Props> = ({}) => {
  const { history, status, cwd } = useStore(terminalStore);
  console.log("HISTORY", history);
  return (
    <Page>
      <TerminalContent
        cwd={cwd}
        status={status}
        onSendCommand={sendTerminalCommandEffect}
        // Hack, sometimes it becomes an empty object instead of empty array
        // not sure why but this fixes it
        history={history}
      />
    </Page>
  );
};
