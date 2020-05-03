import "./index.css";
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
import { appsSnapshotChanged } from "./features/apps/apps";
import { fixMobileBrowserWindow } from "./features/utils/mobile";

async function bootstrap() {
  fixMobileBrowserWindow();

  initFirebase();

  listenForFirebaseSnapshots("cubes", snapshot => {
    if (snapshot) cubeSnapshotChanged(snapshot);
  });

  listenForFirebaseSnapshots("terminals", snapshot => {
    if (snapshot) terminalSnapshotChanged(snapshot);
  });

  listenForFirebaseSnapshots("apps", snapshot => {
    if (snapshot) appsSnapshotChanged(snapshot);
  });

  let hasStarted = false;
  listenForFirebaseAuthStateChange(user => {
    if (user) {
      userSignedIn(user);
    } else {
      userSignedOut();
    }

    // This is kinda ugh.. tbh
    if (!hasStarted) {
      hasStarted = true;
      ReactDOM.render(<App />, document.getElementById("root"));
    }
  });
}

bootstrap();
