document.addEventListener("DOMContentLoaded", function() {
    const passwordForm = document.getElementById("password-form");
    const passwordInput = document.getElementById("password");
    const downloadsSection = document.getElementById("downloads");

    passwordForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const password = passwordInput.value;
       
        if (password === "toxicorg555") {
            downloadsSection.classList.remove("hidden");
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});
