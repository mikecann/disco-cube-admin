import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  initFirebase,
  listenForFirebaseAuthStateChange,
  listenForFirebaseSnapshots,
} from "./features/firebase/firebase";
import { userSignedIn, userSignedOut } from "./features/auth/auth";
import { cubeSnapshotChanged } from "./features/cube/cube";
import { terminalSnapshotChanged } from "./features/terminal/terminal";

async function bootstrap() {
  initFirebase();

  listenForFirebaseSnapshots("cubes", snapshot => {
    if (snapshot) cubeSnapshotChanged(snapshot);
  });

  listenForFirebaseSnapshots("terminals", snapshot => {
    if (snapshot) terminalSnapshotChanged(snapshot);
  });

  listenForFirebaseAuthStateChange(user => {
    if (user) {
      userSignedIn(user);
    } else {
      userSignedOut();
    }
  });

  ReactDOM.render(<App />, document.getElementById("root"));
}

bootstrap();
