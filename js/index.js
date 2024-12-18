// This file will primarily focus on initializing the page and loading various elements

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Navbar, Sidebar, Video Cards
    loadNavbarAndSidebar();  // Load the Navbar and Sidebar from external files
    loadVideoCards();        // Load video cards dynamically
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the video player
    loadVideoPlayer();
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChange } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk6Q7tQD5bRNIlY0K5XRy3pXc3RKg1drk",
  authDomain: "airhive-33cc5.firebaseapp.com",
  projectId: "airhive-33cc5",
  storageBucket: "airhive-33cc5.firebasestorage.app",
  messagingSenderId: "852166236645",
  appId: "1:852166236645:web:ac3d15fc608378a2dab70c",
  measurementId: "G-6MPGT5709C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);