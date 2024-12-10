import admin from "firebase-admin";
import serviceAccount from "./esp8266bynasim-firebase-adminsdk-cozvg-6aebddec3c.json" with { type: "json" };





admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://esp8266bynasim-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export const firebaseDB = admin.database();