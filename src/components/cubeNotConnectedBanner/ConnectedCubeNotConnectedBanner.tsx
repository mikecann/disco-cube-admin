import * as React from "react";
import { CubeNotOnlineBanner } from "./CubeNotOnlineBanner";
import { useStore } from "effector-react";
import { isCubeOnlineStore } from "../../features/cube/cube";

interface Props {}

export const ConnectedCubeNotConnectedBanner: React.FC<Props> = ({}) => {
  const isOnline = useStore(isCubeOnlineStore);
  return <CubeNotOnlineBanner isOnline={isOnline} />;
};
