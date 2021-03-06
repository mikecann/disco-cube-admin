import * as React from "react";
import { Segment } from "../../components/segment/Segment";
import { Input } from "antd";
import { Vertical, VerticalProps } from "gls/lib";
import { TerminalState, TerminalCommandExecution } from "../../sharedTypes";
import { SearchProps } from "antd/lib/input";

interface Props {
  history: TerminalCommandExecution[];
  status: TerminalState["status"];
  cwd: string;
  onSendCommand: (command: string) => any;
}

export const TerminalContent: React.FC<Props> = ({ history, onSendCommand, cwd, status }) => {
  const [command, setCommand] = React.useState("");
  const search = React.useRef<any>(null);
  const scroller = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!search.current || !search.current.input) return;
    if (!scroller.current) return;
    scroller.current.scrollTo();
    search.current.input.focus();
  }, [history]);

  console.log("history", history);

  return (
    <Segment spacing={10} width="100%" maxWidth={500} height={"100%"}>
      <Vertical
        ref={scroller}
        style={{
          backgroundColor: "black",
          fontFamily: "Consolas,monaco,monospace",
          color: "white",
          minHeight: 300,
          height: "calc(100% - 12px)",
          overflow: "auto",
          padding: 10,
        }}
      >
        <p>This is a live open terminal to the Disco Cube.. Be careful!</p>
        {history.map((exec, i) => (
          <ExecutionOutput key={i} exec={exec} />
        ))}
        <div>{cwd}</div>
        <Input.Search
          ref={search}
          onInput={el => console.log("GOT EL")}
          value={command}
          onChange={e => setCommand(e.target.value)}
          placeholder="Command.."
          disabled={status == "executing"}
          loading={status == "executing"}
          enterButton="Send"
          onSearch={value => {
            onSendCommand(command);
            setCommand("");
          }}
        />
      </Vertical>
    </Segment>
  );
};

const ExecutionOutput: React.FC<{ exec: TerminalCommandExecution }> = ({
  exec: { command, cwd, error, status, stderr, stdout },
}) => {
  const getLines = () => {
    if (error)
      return (
        <div style={{ color: "red" }}>
          {error.split(`\n`).map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      );

    if (stderr)
      return (
        <div style={{ color: "red" }}>
          {stderr.split(`\n`).map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      );

    return (
      <div style={{ color: `#737373` }}>
        {stdout.split(`\n`).map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <div>
        {cwd}> {command}
      </div>
      <div> </div>
      {getLines()}
    </div>
  );
};
