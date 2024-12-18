import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Firebase Configuration
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

// Selectors
const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");

// Variables
let email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

// Function to show messages
function showMessage(messageText, type = "info") {
  const messageContainer = document.getElementById("message-container");

  if (!messageContainer) {
    console.error("Message container not found!");
    return;
  }

  const message = document.createElement("div");
  message.textContent = messageText;

  // Message styles
  message.style.padding = "10px";
  message.style.marginBottom = "10px";
  message.style.borderRadius = "5px";
  message.style.color = "#fff";
  message.style.fontSize = "14px";

  if (type === "success") {
    message.style.backgroundColor = "#4caf50"; // Green
  } else if (type === "error") {
    message.style.backgroundColor = "#f44336"; // Red
  } else {
    message.style.backgroundColor = "#2196f3"; // Blue
  }

  messageContainer.appendChild(message);

  // Auto-remove message after 5 seconds
  setTimeout(() => {
    messageContainer.removeChild(message);
  }, 5000);
}

// Event Listener for Signup
createacctbtn.addEventListener("click", () => {
  let isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail !== confirmSignupEmail) {
    showMessage("Email fields do not match. Try again.", "error");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword !== confirmSignUpPassword) {
    showMessage("Password fields do not match. Try again.", "error");
    isVerified = false;
  }

  if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    showMessage("Please fill out all required fields.", "error");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        showMessage("Success! Account created.", "success");
        setTimeout(() => {
          window.location.href = "signin.html";
        }, 3000);
      })
      .catch((error) => {
        showMessage(`Error: ${error.message}`, "error");
      });
  }
});

// Event Listener for Sign In
submitButton.addEventListener("click", () => {
  email = emailInput.value;
  password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      showMessage("Success! Welcome back!", "success");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    })
    .catch((error) => {
      showMessage(`Error: ${error.message}`, "error");
    });
});

// Event Listener for Switch to Signup
signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

// Event Listener for Return to Sign In
returnBtn.addEventListener("click", () => {
  main.style.display = "block";
  createacct.style.display = "none";
});

// onAuthStateChanged(auth, (user) => {
//   const signInButton = document.getElementById("sign-in-page");
//   const profileButton = document.getElementById("profile-button");

//   if (user) {
//     // User is signed in, show profile
//     signInButton.style.display = "none";

//     if (!profileButton) {
//       const profile = document.createElement("button");
//       profile.id = "profile-button";
//       profile.textContent = "Profile";
//       profile.addEventListener("click", () => {
//         // Log out functionality
//         signOut(auth)
//           .then(() => {
//             console.log("User signed out");
//             window.location.reload();
//           })
//           .catch((error) => console.error("Sign out error:", error));
//       });
//       document.querySelector("header").appendChild(profile);
//     }
//   } else {
//     // No user signed in, show sign-in button
//     signInButton.style.display = "block";
//     if (profileButton) profileButton.remove();
//   }
// });