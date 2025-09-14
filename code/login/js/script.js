const form = document.getElementById("login");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (user === "") {
        alert("Please enter username.");
        return;
    }

    if (password === "") {
        alert("Please enter password.");
        return;
    }

    // if both fields filled
    alert("Checking your data and logging in...");
    location.reload();
});