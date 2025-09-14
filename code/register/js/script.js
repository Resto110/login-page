const form = document.getElementById("signUp");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const user = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "") {
        alert("Please enter an email.");
        return;
    }

    if (user === "") {
        alert("Please enter username.");
        return;
    }

    if (password === "") {
        alert("Please enter password.");
        return;
    }

    alert("Registering your data and redirecting you to the login page...");
    location.href = "../login/index.html";
});