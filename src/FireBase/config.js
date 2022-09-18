
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqYoFWZRRKSYadYflKCysSRVOOQTO9lBE",
  authDomain: "coderstore-3ba40.firebaseapp.com",
  projectId: "coderstore-3ba40",
  storageBucket: "coderstore-3ba40.appspot.com",
  messagingSenderId: "439900469648",
  appId: "1:439900469648:web:9c046573bbedc3fdb11b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);



