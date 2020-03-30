import "antd/dist/antd.less";
import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.tsx
const req = require.context("../../stories", true, /.stories.tsx$/);
configure(() => req.keys().forEach(req), module);
