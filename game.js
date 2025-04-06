import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const usernameSpan = document.getElementById("username");
const genderSpan = document.getElementById("gender");
const gameMessage = document.getElementById("game-message");

// Load user data
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const snapshot = await get(child(ref(db), `users/${uid}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      usernameSpan.textContent = data.username || "Unknown";
      genderSpan.textContent = data.gender || "Unknown";
    } else {
      usernameSpan.textContent = "No data";
      genderSpan.textContent = "-";
    }
  } else {
    gameMessage.textContent = "You are not logged in.";
    window.location.href = "index.html";
  }
});

// Placeholder functions
window.findJob = function () {
  gameMessage.textContent = "Searching for jobs...";
  // Add real logic later!
};

window.findOtherUsers = async function () {
  gameMessage.textContent = "Looking for other users...";
  // Example idea: you could fetch all users and display usernames here
};
