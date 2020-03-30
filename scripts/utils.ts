import * as path from "path";

export const projPath = (relativePath: string) => path.join(process.cwd(), relativePath);

export const esPath = (relativePath: string) => path.join(path.join(__dirname, ".."), relativePath);

export const requireFromProj = <T = {}>(relativePath: string) =>
  require(projPath(relativePath)) as T;

export const getEnvironment = () => {
  return process.env.ENVIRONMENT || "local";
};

export const getProjConfig = (name: string, environment = getEnvironment()) => {
  const absPath = projPath(`./config/es/${name}.ts`);
  const config = require(absPath).config;
  if (!config) throw new Error(`Config file '${absPath}' must export the variable "config"`);
  const envConf = config[environment];
  if (!envConf)
    throw new Error(
      `Could not find a config for the environment '${environment}' in the file '${absPath}'`
    );
  return envConf as {};
};
