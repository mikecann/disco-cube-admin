import { createDomain, combine } from "effector";
import { logDomain } from "../utils/effector";

import { terminalStore } from "../terminal/terminal";
import { authStore } from "../auth/auth";
import { cubeStore } from "../cube/cube";

const domain = createDomain(`app`);
logDomain(domain);

export const appStore = combine({
  auth: authStore,
  terminal: terminalStore,
  cube: cubeStore,
});
