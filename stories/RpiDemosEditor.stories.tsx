import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { RpiDemosEditor } from "../src/containers/appsPage/RpiDemosEditor";

const props: React.ComponentProps<typeof RpiDemosEditor> = {};

storiesOf("RpiDemosEditor", module)
  .addDecorator(commonDecorator)
  .addDecorator(fn => (
    <div style={{ border: "1px dashed red", margin: 20, width: 500, height: 400 }}>{fn()}</div>
  ))
  .add("default", () => <RpiDemosEditor {...props} />);
