import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { Input } from "antd";
import { Vertical } from "gls/lib";

interface Props {
  command: string;
  lines: string[];
  isSendingCommand: boolean;
  onSendCommand: (command: string) => any;
  onCommandChange: (command: string) => any;
}

export const TerminalContent: React.FC<Props> = ({
  command,
  lines,
  onSendCommand,
  isSendingCommand,
  onCommandChange,
}) => {
  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"} scroll="vertical">
      <Vertical
        style={{
          backgroundColor: "black",
          fontFamily: "Consolas,monaco,monospace",
          color: "white",
          minHeight: 300,
          height: "calc(100% - 45px)",
          overflow: "auto",
          padding: 10,
        }}
      >
        {lines.map((l, i) => (
          <p key={i}>> {l}</p>
        ))}
      </Vertical>
      <Input.Search
        value={command}
        onChange={e => onCommandChange(e.target.value)}
        placeholder="Command.."
        disabled={isSendingCommand}
        loading={isSendingCommand}
        enterButton="Send"
        onSearch={value => onSendCommand(value)}
      />
    </Segment>
  );
};
