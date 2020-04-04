import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/database";
import { CubeState } from "../cube/cube";
import { FirebaseCollections } from "../../sharedTypes";

const config = {
  apiKey: "AIzaSyCNZOxJQX8x5-z2iWyMLCkKZ6sQjkaGZR8",
  authDomain: "disco-cube.firebaseapp.com",
  databaseURL: "https://disco-cube.firebaseio.com",
  projectId: "disco-cube",
  storageBucket: "disco-cube.appspot.com",
  messagingSenderId: "239577858848",
  appId: "1:239577858848:web:f84d626c0604a452698d45",
  measurementId: "G-D9SX9GEWJY",
};

export const initFirebase = () => {
  firebase.initializeApp(config);
  firebase.analytics();
};

const defaultUserEmail = `mike.cann@gmail.com`;

export const signInToFirebase = (password: string) =>
  firebase.auth().signInWithEmailAndPassword(defaultUserEmail, password);

export const signOutOfFirebase = () => firebase.auth().signOut();

export const listenForFirebaseAuthStateChange = (handler: (user: firebase.User | null) => any) =>
  firebase.auth().onAuthStateChanged(handler);

export const listenForCubeSnapshots = (handler: (cube: CubeState | undefined) => any) =>
  firebase
    .firestore()
    .collection("cubes")
    .onSnapshot(s => {
      if (s.docs.length > 0) {
        const data = s.docs[0].data() as any;
        if (data.statusChangedAt)
          data.statusChangedAt = new Date(data.statusChangedAt.seconds * 1000);
        handler(data);
      }
    });

export const listenForFirebaseSnapshots = <T extends keyof FirebaseCollections>(
  collection: T,
  handler: (cube: FirebaseCollections[T] | undefined) => any
) => {
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) throw new Error(`user must be authenticated`);
  firebase
    .firestore()
    .collection(collection)
    .doc(currentUser.uid)
    .onSnapshot(x => handler(x.data() as any));
};

export const setFirebaseState = <T extends keyof FirebaseCollections>(
  collection: T,
  state: FirebaseCollections[T]
) => {
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) throw new Error(`user must be authenticated`);
  return firebase
    .firestore()
    .collection(collection)
    .doc(currentUser.uid)
    .set(state);
};

export const updateFirebaseState = <T extends keyof FirebaseCollections>(
  collection: T,
  partial: Partial<FirebaseCollections[T]>
) => {
  const currentUser = firebase.auth().currentUser;
  if (!currentUser) throw new Error(`user must be authenticated`);
  return firebase
    .firestore()
    .collection(collection)
    .doc(currentUser.uid)
    .update(partial);
};

export const getStatus = () => {
  // firebase
  //   .firestore()
  //   .collection("status")
  //   .where("state", "==", "online")
  //   .onSnapshot(function(snapshot) {
  //     snapshot.docChanges.forEach(function(change) {
  //       if (change.type === "added") {
  //         var msg = "User " + change.doc.id + " is online.";
  //         console.log(msg);
  //         // [START_EXCLUDE]
  //         //history.innerHTML += msg + "<br />";
  //         // [END_EXCLUDE]
  //       }
  //       if (change.type === "removed") {
  //         var msg = "User " + change.doc.id + " is offline.";
  //         console.log(msg);
  //         // [START_EXCLUDE]
  //         // history.innerHTML += msg + "<br />";
  //         // [END_EXCLUDE]
  //       }
  //     });
  //   });
};
