import { createDomain, Store } from "effector";
import { logDomain, openMessageErrorOnEffectFail } from "../utils/effector";

const domain = createDomain(`terminal`);
logDomain(domain);

export interface TerminalState {
  command: string;
  lines: string[];
  isSendingCommand: boolean;
}

// Events
export const changeTerminalCommand = domain.createEvent<string>();
export const addTerminalLine = domain.createEvent<string>();

// Effects
export const sendTerminalCommandEffect = domain.createEffect({
  async handler(command: string) {
    //return signInToFirebase(password);
  },
});
openMessageErrorOnEffectFail(sendTerminalCommandEffect);

// Store
export const terminalStore = domain.createStore<TerminalState>(
  {
    command: "",
    lines: [`This is a live open terminal to the Disco Cube.. Be careful!`],
    isSendingCommand: false,
  },
  { name: `store` }
);

export interface TerminalStore extends Store<TerminalState> {}
