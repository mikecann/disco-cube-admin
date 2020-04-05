import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { TerminalContent } from "../src/containers/terminalPage/TerminalContent";
import * as faker from "faker";

const props: React.ComponentProps<typeof TerminalContent> = {
  status: "waiting",
  history: [],
  cwd: "C:\\dev\\me",
  onSendCommand: command => alert(`onSendCommand '${command}'`),
};

storiesOf("TerminalContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <TerminalContent {...props} />)
  .add("executing", () => <TerminalContent {...props} status="executing" />);
// .add("with lines", () => <TerminalContent {...props} output={["line 1", "line 2", "line 3"]} />)
// .add("with lots of lines", () => (
//   <TerminalContent
//     {...props}
//     output={[
//       faker.random.words(100),
//       faker.random.words(100),
//       faker.random.words(100),
//       faker.random.words(100),
//       faker.random.words(100),
//       faker.random.words(100),
//     ]}
//   />
// ));
