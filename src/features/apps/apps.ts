import { createDomain, Store } from "effector";
import { logDomain, openMessageErrorOnEffectFail } from "../utils/effector";
import { TerminalState, AppsState, AppsCommands } from "../../sharedTypes";
import { updateFirebaseState } from "../firebase/firebase";

const domain = createDomain(`terminal`);
logDomain(domain);

// Events
export const appsSnapshotChanged = domain.createEvent<any>();

// Effects
export const sendAppCommand = domain.createEffect({
  handler: async function(command: AppsCommands) {
    return updateFirebaseState("apps", {
      command,
    });
  },
});
openMessageErrorOnEffectFail(sendAppCommand);

export const cancelAppCommand = domain.createEffect({
  handler: async function() {
    return updateFirebaseState("apps", {
      command: null,
    });
  },
});
openMessageErrorOnEffectFail(cancelAppCommand);

// Store
export const appsStore = domain
  .createStore<AppsState>(
    {
      command: null,
      runningApp: null,
    },
    { name: `store` }
  )
  .on(appsSnapshotChanged, (_, payload) => payload);

export const runningAppStore = appsStore.map(s => s.runningApp);
export const appCommandStore = appsStore.map(s => s.command);
export const appsCommandStore = appsStore.map(s => s.command);

export interface TerminalStore extends Store<TerminalState> {}
