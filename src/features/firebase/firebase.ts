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

const cubeId = `fmNezwKQFxf0hWcQ4rhc1eMt9WM2`; // cube
// const cubeId = nibEA4nCmebMoD6wVNa81KoMilq2`// local dev

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

export const listenForFirebaseSnapshots = <T extends keyof FirebaseCollections>(
  collection: T,
  handler: (cube: FirebaseCollections[T] | undefined) => any
) => {
  firebase
    .firestore()
    .collection(collection)
    .doc(cubeId)
    .onSnapshot(x => handler(x.data() as any));
};

export const setFirebaseState = <T extends keyof FirebaseCollections>(
  collection: T,
  state: FirebaseCollections[T]
) => {
  return firebase
    .firestore()
    .collection(collection)
    .doc(cubeId)
    .set(state);
};

export const updateFirebaseState = <T extends keyof FirebaseCollections>(
  collection: T,
  partial: Partial<FirebaseCollections[T]>
) => {
  return firebase
    .firestore()
    .collection(collection)
    .doc(cubeId)
    .update(partial);
};
