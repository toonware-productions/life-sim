// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDCfi_8l9cv8Sys3s71lmqssdvp2gmO0VQ",
  authDomain: "toonware-productions.firebaseapp.com",
  databaseURL: "https://toonware-productions-default-rtdb.firebaseio.com",
  projectId: "toonware-productions",
  storageBucket: "toonware-productions.firebasestorage.app",
  messagingSenderId: "974603832747",
  appId: "1:974603832747:web:7759fbf0bb310b44f816ee",
  measurementId: "G-BP5QYH6984"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("auth-message");

window.signup = async function () {
  try {
    await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = "Signup successful! You can now log in.";
    message.style.color = "green";
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
};

window.login = async function () {
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = "Login successful! Redirecting...";
    message.style.color = "green";

    // Redirect to game page (create this later)
    setTimeout(() => {
      window.location.href = "game.html";
    }, 1500);
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
};
