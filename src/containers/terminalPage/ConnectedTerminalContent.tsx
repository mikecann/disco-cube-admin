import * as React from "react";
import { TerminalContent } from "./TerminalContent";
import { terminalStore, sendTerminalCommandEffect } from "../../features/terminal/terminal";
import { useStore } from "effector-react";

interface Props {}

export const ConnectedTerminalContent: React.FC<Props> = ({}) => {
  const { history, status, cwd } = useStore(terminalStore);
  return (
    <TerminalContent
      cwd={cwd}
      status={status}
      history={history}
      onSendCommand={sendTerminalCommandEffect}
    />
  );
};
