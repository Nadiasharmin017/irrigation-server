import mongoose from "mongoose";
import app from './app.js';
import admin from 'firebase-admin';
import { firebaseDB } from "./firebase.js";

const port = process.env.PORT;
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.URL);
  
  firebaseDB.ref("testConnection").set({ connected: true })
  .then(() => {
    console.log("Write test passed. Firebase connected successfully.");
    // Test read operation
    return firebaseDB.ref("testConnection").once("value");
  })
  .then((snapshot) => {
    console.log("Read test passed. Data:", snapshot.val());
  })
  .catch((error) => {
    console.error("Firebase connection test failed:", error);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); //if your database has auth enabled
}