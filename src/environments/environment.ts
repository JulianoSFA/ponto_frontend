// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiPath: 'http://localhost:8000',
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBbXrLOq5SibpkNof_ALA1LGvcuy8ijkMg",
    authDomain: "pi-ponto.firebaseapp.com",
    projectId: "pi-ponto",
    storageBucket: "pi-ponto.appspot.com",
    messagingSenderId: "295602542836",
    appId: "1:295602542836:web:6c962a917d30e5228966a1",
    measurementId: "G-5HDQJ0GLY1"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
