import { createDomain, Store } from "effector";
import { logDomain, openMessageErrorOnEffectFail } from "../utils/effector";
import { TerminalState } from "../../sharedTypes";
import { update } from "typescript-immutable-utils";
import { updateFirebaseState } from "../firebase/firebase";

const domain = createDomain(`terminal`);
logDomain(domain);

// Events
export const changeTerminalCommand = domain.createEvent<string>();
export const addTerminalLine = domain.createEvent<string>();
export const terminalSnapshotChanged = domain.createEvent<any>();

// Effects
export const sendTerminalCommandEffect = domain.createEffect({
  async handler(command: string) {
    return updateFirebaseState("terminals", { command });
  },
});
openMessageErrorOnEffectFail(sendTerminalCommandEffect);

// Store
export const terminalStore = domain
  .createStore<TerminalState>(
    {
      history: [],
      command: "",
      cwd: "~",
      status: "waiting",
    },
    { name: `store` }
  )
  .on(terminalSnapshotChanged, (_, payload) => payload)
  .on(sendTerminalCommandEffect.pending, state => update(state, { status: "executing" }));

export interface TerminalStore extends Store<TerminalState> {}
