import { createDomain, Store } from "effector";
import { logDomain } from "../utils/effector";
import { FirebaseCubeState, EssentialSystemInfo } from "../../sharedTypes";

const domain = createDomain(`cube`);
logDomain(domain);

export type CubeState = FirebaseCubeState;

// Events
export const cubeSnapshotChanged = domain.createEvent<any>();

// Effects

// Store
export const cubeStore = domain
  .createStore<CubeState>(
    {
      status: "offline",
      statusChangedAt: undefined,
    },
    { name: `store` }
  )
  .on(cubeSnapshotChanged, (_, payload) => {
    if (payload.statusChangedAt)
      payload.statusChangedAt = new Date(payload.statusChangedAt.seconds * 1000);
    return payload;
  });

export const fullSystemInfoStore = cubeStore.map(s =>
  s.fullSystemInfoJson ? JSON.parse(s.fullSystemInfoJson) : {}
);

export const essentialStatsStore: Store<EssentialSystemInfo> = cubeStore.map(
  s =>
    s.essentialSystemInfo || {
      batteryLevelPercentage: 0,
      cpuLoadsPercent: [],
      cpuTemperature: 0,
      memUsagePercent: 0,
    }
);

export interface CubeStore extends Store<CubeState> {}
