import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { StatsPageContent } from "../src/containers/statsPage/StatsPageContent";

const props: React.ComponentProps<typeof StatsPageContent> = {
  isConnected: true,
  onLogout: () => alert(`onLogout`),
};

storiesOf("StatsPageContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <StatsPageContent {...props} />)
  .add("not connected", () => <StatsPageContent {...props} isConnected={false} />);
