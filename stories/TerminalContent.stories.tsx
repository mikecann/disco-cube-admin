import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { TerminalContent } from "../src/containers/terminalPage/TerminalContent";
import * as faker from "faker";

const props: React.ComponentProps<typeof TerminalContent> = {
  command: "",
  isSendingCommand: false,
  lines: [],
  onSendCommand: command => alert(`onSendCommand '${command}'`),
  onCommandChange: command => alert(`onCommandChange '${command}'`),
};

storiesOf("TerminalContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <TerminalContent {...props} />)
  .add("isSendingCommand", () => <TerminalContent {...props} isSendingCommand />)
  .add("with command", () => <TerminalContent {...props} command="Foobar moo bar moodoo" />)
  .add("with lines", () => <TerminalContent {...props} lines={["line 1", "line 2", "line 3"]} />)
  .add("with lots of lines", () => (
    <TerminalContent
      {...props}
      lines={[
        faker.random.words(100),
        faker.random.words(100),
        faker.random.words(100),
        faker.random.words(100),
        faker.random.words(100),
        faker.random.words(100),
      ]}
    />
  ));
