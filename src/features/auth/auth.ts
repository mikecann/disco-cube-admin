import { createDomain, combine } from "effector";
import { logDomain } from "../utils/effector";
import { update } from "typescript-immutable-utils";
import { signInToFirebase, signOutOfFirebase } from "../firebase/firebase";
import { message } from "antd";

const domain = createDomain(`auth`);
logDomain(domain);

export interface User extends firebase.User {}

export interface AuthState {
  user: User | null;
  isLoggingIn: boolean;
}

// Events
export const userSignedIn = domain.createEvent<User>();
export const userSignedOut = domain.createEvent();

// Effects
export const loginEffect = domain.createEffect({
  async handler(password: string) {
    return signInToFirebase(password);
  },
});
loginEffect.fail.watch(err => message.error(`Login failed: ${err.error}`));

export const logoutEffect = domain.createEffect<void, void>({
  async handler() {
    return signOutOfFirebase();
  },
});

// Store
export const authStore = domain
  .createStore<AuthState>(
    {
      user: null,
      isLoggingIn: false,
    },
    { name: "store" }
  )

  // Events
  .on(userSignedIn, (state, user) => update(state, { user }))
  .on(userSignedOut, state => update(state, { user: null }))

  // Effects
  .on(loginEffect.pending, (state, isLoggingIn) => update(state, { isLoggingIn }))
  .on(loginEffect.done, (state, { result }) => update(state, { user: result.user }))

  .on(logoutEffect.done, state => update(state, { user: null }));
