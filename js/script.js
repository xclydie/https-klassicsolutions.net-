document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");
    const closeIcon = document.querySelector(".icon-close");
    const loginPopup = document.querySelector(".btnLogin-popup");

    // Initially hide the wrapper
    wrapper.style.display = "none";

    // Show register form when clicking "Register"
    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.add("active");
    });

    // Show login form when clicking "Login"
    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.remove("active");
    });

    // Show login form when clicking login button
    loginPopup.addEventListener("click", () => {
        wrapper.style.display = "block";
    });

    // Close the form when clicking the close icon
    closeIcon.addEventListener("click", () => {
        wrapper.style.display = "none";
        wrapper.classList.remove("active");
    });
});
