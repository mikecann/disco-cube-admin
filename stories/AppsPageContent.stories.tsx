import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { AppsPageContent } from "../src/containers/appsPage/AppsPageContent";

const props: React.ComponentProps<typeof AppsPageContent> = {
  runningAppName: undefined,
  onStopApp: () => alert(`onStopApp`),
  onOpenPage: page => alert(`onOpenPage '${page}'`),
  command: "",
  onCancelCommand: () => alert(`onCancelCommand`),
};

storiesOf("AppsPageContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <AppsPageContent {...props} />)
  .add("running app", () => <AppsPageContent {...props} runningAppName="foo app" />)
  .add("active command", () => <AppsPageContent {...props} command="some command" />);
