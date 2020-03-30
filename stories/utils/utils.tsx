import * as React from "react";
import { StoryFn } from "@storybook/addons";
import { StoryFnReactReturnType } from "@storybook/react/dist/client/preview/types";
import { RootStyles } from "../../src/common/rootStyles/RootStyles";

export const commonDecorator = (fn: StoryFn<StoryFnReactReturnType>) => (
  <RootStyles>{fn()}</RootStyles>
);
