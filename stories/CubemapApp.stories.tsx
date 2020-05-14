import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { CubemapApp } from "../src/containers/appsPage/apps/cubemap/CubemapApp";

const props: React.ComponentProps<typeof CubemapApp> = {
  onBack: () => alert(`onBack`),
  isCommand: false,
  isRunning: false,
  onStopCubemap: () => alert(`onStopCubemap`),
  onStartCubemap: state => alert(`onStartCubemap ${JSON.stringify(state)}`),
};

storiesOf("CubemapApp", module)
  .addDecorator(commonDecorator)
  .add("default", () => <CubemapApp {...props} />);
