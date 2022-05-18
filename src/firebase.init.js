import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBopo7jRc8XBKSTAq5VWKHgfH9J7XlRFlk",
  authDomain: "todo-app-adeff.firebaseapp.com",
  projectId: "todo-app-adeff",
  storageBucket: "todo-app-adeff.appspot.com",
  messagingSenderId: "763990908343",
  appId: "1:763990908343:web:d94e753e5ef57edfc4dc32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
