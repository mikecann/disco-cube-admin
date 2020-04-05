import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { AccountPageContent } from "../src/containers/accountPage/AccountPageContent";
import { AppsPageContent } from "../src/containers/appsPage/AppsPageContent";

const props: React.ComponentProps<typeof AppsPageContent> = {};

storiesOf("AppsPageContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <AppsPageContent {...props} />);
