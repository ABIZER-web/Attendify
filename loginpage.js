// /js/script.js

// Function to generate a secure password
function generatePassword() {
    const length = 12;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
}

// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.querySelector(".eye-button i");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Loading screen disappear after page load
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.opacity = 0;
        setTimeout(function() {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 3000); // Display for 3 seconds
};

// Login form submission handling
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
       
        // Email and password validation
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter both email and password.");
            return;
        }

        // Redirect to college.html on successful login
        window.location.href = "college.html";
    });
});
