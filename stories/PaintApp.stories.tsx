import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { PaintApp } from "../src/containers/appsPage/apps/paint/PaintApp";
import { PaintAppState } from "../src/sharedTypes";

const props: React.ComponentProps<typeof PaintApp> = {
  onBack: () => alert(`onBack`),
  isCommand: false,
  isRunning: false,
  onStop: () => alert(`onStopDemo`),
  onStart: state => alert(`onStartDemo ${JSON.stringify(state)}`),
  state: PaintAppState({ faces: [] }),
  onAppStateUpdated: s => {
    console.log("onAppStateUpdated", s);
  },
};

storiesOf("PaintApp", module)
  .addDecorator(commonDecorator)
  .addDecorator(fn => (
    <div style={{ border: "1px dashed red", margin: 20, width: 500, height: 400 }}>{fn()}</div>
  ))
  .add("default", () => <PaintApp {...props} />)
  .add("isRunning", () => <PaintApp {...props} isRunning={true} />);
