import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";
import { LoginContent } from "../src/containers/loginPage/LoginContent";

const props: React.ComponentProps<typeof LoginContent> = {
  onLogin: () => alert(`onLogin`),
  loading: false,
};

storiesOf("LoginContent", module)
  .addDecorator(commonDecorator)
  .add("default", () => <LoginContent {...props} />)
  .add("loading", () => <LoginContent {...props} loading />);
