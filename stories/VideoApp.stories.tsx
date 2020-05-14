import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { VideoApp } from "../src/containers/appsPage/apps/video/VideoApp";

const props: React.ComponentProps<typeof VideoApp> = {
  onBack: () => alert(`onBack`),
  isCommand: false,
  isRunning: false,
  onStopVideo: () => alert(`onStopVideo`),
  onStartVideo: state => alert(`onStartVideo ${JSON.stringify(state)}`),
};

storiesOf("VideoApp", module)
  .addDecorator(commonDecorator)
  .add("default", () => <VideoApp {...props} />);
