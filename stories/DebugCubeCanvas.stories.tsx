import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { DebugCubeCanvas } from "../src/containers/debugCubePage/DebugCubeCanvas";

const props: React.ComponentProps<typeof DebugCubeCanvas> = {};

storiesOf("DebugCubeCanvas", module)
  .addDecorator(commonDecorator)
  .add("default", () => <DebugCubeCanvas {...props} />);
