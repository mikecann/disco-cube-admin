import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/database";
import { FirebaseCollections, dataConverter } from "../../sharedTypes";
import { config } from "../../common/config/config";

const produceFirebaseConfig = () => ({
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGE_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
  measurementId: config.FIREBASE_MEASUREMENT_ID,
});

export const initFirebase = () => {
  firebase.initializeApp(produceFirebaseConfig());
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
    .doc(config.CUBE_ID)
    .onSnapshot(x => handler(x.data() as any));
};

export const setFirebaseState = <T extends keyof FirebaseCollections>(
  collection: T,
  state: FirebaseCollections[T]
) => {
  return firebase
    .firestore()
    .collection(collection)
    .doc(config.CUBE_ID)
    .set(state);
};

export const updateFirebaseState = <T extends keyof FirebaseCollections>(
  collection: T,
  partial: Partial<FirebaseCollections[T]>
) => {
  const converted = dataConverter.toFirestore(partial);
  return firebase
    .firestore()
    .collection(collection)
    .doc(config.CUBE_ID)
    .update(converted);
};
