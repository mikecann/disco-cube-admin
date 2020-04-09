import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { RPIDemos } from "../src/containers/appsPage/RPIDemos";

const props: React.ComponentProps<typeof RPIDemos> = {
  onBack: () => alert(`onBack`),
  canStart: true,
  onStartDemo: state => alert(`onStartDemo ${JSON.stringify(state)}`),
};

storiesOf("RPIDemos", module)
  .addDecorator(commonDecorator)
  .addDecorator(fn => (
    <div style={{ border: "1px dashed red", margin: 20, width: 500, height: 400 }}>{fn()}</div>
  ))
  .add("default", () => <RPIDemos {...props} />)
  .add("cant start", () => <RPIDemos {...props} canStart={false} />);
