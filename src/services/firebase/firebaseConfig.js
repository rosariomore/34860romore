import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC9M5xYaPgaHFCwsKzRJCFWNh5ArjTCGis",
  authDomain: "romore34860.firebaseapp.com",
  projectId: "romore34860",
  storageBucket: "romore34860.appspot.com",
  messagingSenderId: "411296987116",
  appId: "1:411296987116:web:1fda058330d5e62adf72c9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)