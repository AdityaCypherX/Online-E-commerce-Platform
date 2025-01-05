document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateLoginForm();
  });

  function validateLoginForm() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let valid = true;

    // Email Validation
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    // Password Validation
    if (!password.value) {
      password.classList.add("is-invalid");
      valid = false;
    } else {
      password.classList.remove("is-invalid");
    }

    if (valid) {
      alert("Login successful!");
      loginForm.reset();
    }
  }
});
