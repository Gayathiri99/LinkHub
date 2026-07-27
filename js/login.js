const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    // Admin Login
    if (username === "admin" && phone === "1234567890" && password === "admin123") {

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", "true");

        window.location.href = "admin.html";
        return;
    }

    // Registered Users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(user =>
        user.name === username &&
        user.phone === phone &&
        user.password === password
    );

    if (validUser) {

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", "false");
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));

        window.location.href = "index.html";

    } else {

        alert("Invalid username, phone number, or password.");

    }

});