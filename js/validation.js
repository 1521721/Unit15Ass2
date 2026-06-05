(() => {
  const form = document.querySelector("[validation-form]");
  const name = document.getElementById("user-name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const comment = document.getElementById("user-comment");

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "12px";
    error.textContent = message;

    input.parentElement.appendChild(error);
  }

  function clearErrors() {
    document.querySelectorAll(".error").forEach((el) => el.remove());
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!name.value.trim()) {
      showError(name, "Name is required");
      isValid = false;
    } else if (!nameRegex.test(name.value)) {
      showError(
        name,
        "Name must be at least 2 letters and contain only letters",
      );
      isValid = false;
    }

    const phoneDigits = phone.value.replace(/\D/g, "");
    if (!phone.value.trim()) {
      showError(phone, "Phone is required");
      isValid = false;
    } else if (phoneDigits.length < 10) {
      showError(phone, "Phone number is too short");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError(email, "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      showError(email, "Enter a valid email address");
      isValid = false;
    }

    if (comment.value.length > 300) {
      showError(comment, "Comment must be under 300 characters");
      isValid = false;
    }

    if (isValid) {
      const formData = {
        name: name.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        comment: comment.value.trim(),
      };
      alert("Form submitted successfully!");

      console.log(formData);
      form.reset();
    }
  });
})();
