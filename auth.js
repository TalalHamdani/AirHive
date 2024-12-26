// Fetch user data from the JSON file
async function fetchUsers() {
    const response = await fetch("users.json");
    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }
    return response.json();
}

// Hash a password using SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Handle login
async function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const users = await fetchUsers();
        const hashedPassword = await hashPassword(password);

        // Check if the user exists with the hashed password
        const user = users.find(u => u.email === email && u.password === hashedPassword);

        if (user) {
            localStorage.setItem("isLoggedIn", "true"); // Save session
            const redirectUrl = document.referrer || "index.html"; // Redirect to the previous page or dashboard
            window.location.href = redirectUrl;
        } else {
            alert("Invalid email or password!");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
    }
}

// Check session on page load
function checkSession() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn && !window.location.href.includes("login.html")) {
        window.location.href = "login.html"; // Redirect to login if not authenticated
    }
}

// Logout functionality
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // Refresh the current page
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes("login.html")) {
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", handleLogin);
    } else if (window.location.href.includes("dashboard.html")) {
        checkSession();
        const logoutButton = document.getElementById("logoutButton");
        logoutButton.addEventListener("click", logout);
    }
});
