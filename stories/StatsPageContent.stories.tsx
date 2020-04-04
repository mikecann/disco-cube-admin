import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { StatsPageContent } from "../src/containers/statsPage/StatsPageContent";

const props: React.ComponentProps<typeof StatsPageContent> = {
  isConnected: true,
  statusChangedAt: undefined,
  cpuLoadsPercent: [12, 44, 99],
  memUsagePercent: 66,
  allSystemInfo: {
    foo: {
      here1: "yep",
      bar: {
        moo: 123,
        moo2: 456,
        moo3: true,
        moo4: "sdsfsd",
      },
    },
  },
  batteryPercentage: 33,
  cpuTemperature: 45.6,
};

storiesOf("StatsPageContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <StatsPageContent {...props} />)
  .add("not connected", () => <StatsPageContent {...props} isConnected={false} />);
