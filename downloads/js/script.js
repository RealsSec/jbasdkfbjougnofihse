document.addEventListener("DOMContentLoaded", function () {
    const passwordSection = document.getElementById("password-section");
    const contentSection = document.getElementById("content-section");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function () {
        const enteredPassword = passwordInput.value;
       
        if (enteredPassword === "555") {
            passwordSection.style.display = "none";
            contentSection.style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
        }
    });
});
