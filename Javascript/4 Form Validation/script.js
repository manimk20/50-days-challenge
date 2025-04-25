const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        valid = false;
    }

    const password = passwordInput.value.trim();
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else if (!/\d/.test(password)) {
        passwordError.textContent = "Password must contain at least one number";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});