const defaultConfig = {
  // There are all provided by firebase when you setup a web app
  FIREBASE_API_KEY: "",
  FIREBASE_AUTH_DOMAIN: "",
  FIREBASE_DATABASE_URL: "",
  FIREBASE_PROJECT_ID: "",
  FIREBASE_STORAGE_BUCKET: "",
  FIREBASE_MESSAGE_SENDER_ID: "",
  FIREBASE_APP_ID: "",
  FIREBASE_MEASUREMENT_ID: "",

  // This is the id of the cube object in firebase
  CUBE_ID: "nibEA4nCmebMoD6wVNa81KoMilq2",
};

// We override the default config with a local one
export const config = {
  ...defaultConfig,
  ...process.env,
  ...require(`./local.config.json`),
} as typeof defaultConfig;
