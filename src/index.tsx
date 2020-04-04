import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  initFirebase,
  listenForFirebaseAuthStateChange,
  listenForCubeSnapshots,
} from "./features/firebase/firebase";
import { userSignedIn, userSignedOut } from "./features/auth/auth";
import { cubeSnapshotChanged } from "./features/cube/cube";

async function bootstrap() {
  initFirebase();

  listenForCubeSnapshots(cube => {
    if (cube) cubeSnapshotChanged(cube);
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
