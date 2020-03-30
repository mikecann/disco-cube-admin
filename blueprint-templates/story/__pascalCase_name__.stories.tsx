import * as React from "react";
import { storiesOf } from "@storybook/react";
import { commonDecorator } from "./utils/utils";

const props: React.ComponentProps<typeof {{pascalCase name}}> = {
};

storiesOf("{{pascalCase name}}", module)
  .addDecorator(commonDecorator)
  .add("default", () => <{{pascalCase name}} {...props} />)
