// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBRk5VrjYYSDvNa_JknlPLBkqXncLXYjvM",
    authDomain: "prs-emundo.firebaseapp.com",
    databaseURL: "https://prs-emundo.firebaseio.com",
    projectId: "prs-emundo",
    storageBucket: "prs-emundo.appspot.com",
    messagingSenderId: "429599445949",
    appId: "1:429599445949:web:015813f7b1b111ec"
  },
  FUNCTIONS_URL: 'https://us-central1-prs-emundo.cloudfunctions.net',
  TO_CONTACT_EMAIL: 'jandres258@hotmail.com'
};
