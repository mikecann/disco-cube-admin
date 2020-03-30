import storybook from "@storybook/react/standalone";
import { projPath } from "./utils";

export async function startStorybookInDevMode() {
  (process.env as any).NODE_ENV = "development";
  storybook({
    mode: "dev",
    port: 9009,
    staticDir: [projPath("./dist")],
    configDir: projPath("./config/storybook"),
  });
}

async function bootstrap() {
  await startStorybookInDevMode();
}

bootstrap();
