import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { AccountPageContent } from "../src/containers/accountPage/AccountPageContent";

const props: React.ComponentProps<typeof AccountPageContent> = {
  onLogout: () => alert(`onLogout`),
  userEmail: "mike.cann@gmail.com",
};

storiesOf("AccountPageContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <AccountPageContent {...props} />);
