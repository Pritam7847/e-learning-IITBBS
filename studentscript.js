// ========================
// LOGIN HANDLER – Just redirect
// ========================
document.getElementById("stulogin-btn")?.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "student.html"; // Instant redirect
});


// ========================
// SIGNUP HANDLER – Just redirect
// ========================
document.getElementById("signup-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "student.html"; // Instant redirect
});
