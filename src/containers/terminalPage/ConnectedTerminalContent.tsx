import * as React from "react";
import { TerminalContent } from "./TerminalContent";
import {
  terminalStore,
  changeTerminalCommand,
  sendTerminalCommandEffect,
} from "../../features/terminal/terminal";
import { useStore } from "effector-react";

interface Props {}

export const ConnectedTerminalContent: React.FC<Props> = ({}) => {
  const { command, isSendingCommand, lines } = useStore(terminalStore);
  return (
    <TerminalContent
      command={command}
      isSendingCommand={isSendingCommand}
      lines={lines}
      onCommandChange={changeTerminalCommand}
      onSendCommand={sendTerminalCommandEffect}
    />
  );
};
