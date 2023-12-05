// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-GhiGIknnKmjvzN1Y4afGHZCQb3-twqo",
    authDomain: "zeromansite-aa742.firebaseapp.com",
    projectId: "zeromansite-aa742",
    storageBucket: "zeromansite-aa742.appspot.com",
    messagingSenderId: "94593055986",
    appId: "1:94593055986:web:b310282d0b74119f1f646b",
    measurementId: "G-LXRNED1Y0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// auth.js
function signup() { // Handles signup details
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById('message').innerHTML = 'Signed up successfully!';
        })
        .catch((error) => {
            document.getElementById('message').innerHTML = 'Error: ' + error.message;
        });
}

function login() { // Handles Login details
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById('message').innerHTML = 'Logged in successfully!';
        })
        .catch((error) => {
            document.getElementById('message').innerHTML = 'Error: ' + error.message;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    // Attach event listeners to buttons
    document.getElementById("signupButton").addEventListener("click", signup);
    document.getElementById("loginButton").addEventListener("click", login);
});
