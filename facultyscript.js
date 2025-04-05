// ========================
// LOGIN HANDLER – Just redirect
// ========================
document.getElementById("login-btn")?.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "faculty.html"; // Instant redirect
});


// ========================
// SIGNUP HANDLER – Just redirect
// ========================
document.getElementById("signup-btn")?.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "faculty.html"; // Instant redirect
});
