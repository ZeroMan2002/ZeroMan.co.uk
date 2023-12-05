// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  // your firebase configuration
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle user sign up
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // TODO: handle user sign up
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // TODO: handle errors
    });
}

// Function to handle user login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // TODO: handle user login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // TODO: handle errors
    });
}

// Monitoring authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, adjust UI accordingly
    // TODO: Customize UI for logged in user
  } else {
    // No user is signed in
    // TODO: Customize UI for non-logged in user
  }
});
