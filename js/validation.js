// (() => {
//   console.log(123);
//   document.addEventListener("DOMContentLoaded", () => {
//     console.log(321)
//     const form = document.querySelector("[validation-form]");
//     const name = document.getElementById("user-name");
//     const phone = document.getElementById("phone");
//     const email = document.getElementById("email");
//     const experience = document.getElementById("experience");
//     const comment = document.getElementById("user-comment");
//     const cv = document.getElementById("cv");
//     const skillInputs = document.querySelectorAll('input[name="skills"]');

//     if (!form) return;

//     function showError(input, message) {
//       const error = document.createElement("div");
//       error.className = "error";
//       error.style.color = "red";
//       error.style.fontSize = "12px";
//       error.textContent = message;
//       input.parentElement.appendChild(error);
//     }

//     function clearErrors() {
//       document.querySelectorAll(".error").forEach((el) => el.remove());
//     }

//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       clearErrors();
//       let isValid = true;
//       const nameRegex = /^[A-Za-z\s]{2,}$/;
//       if (!name.value.trim()) {
//         showError(name, "Name is required");
//         isValid = false;
//       } else if (!nameRegex.test(name.value)) {
//         showError(name, "Only letters, min 2 characters");
//         isValid = false;
//       }

//       const phoneDigits = phone.value.replace(/\D/g, "");
//       if (!phone.value.trim()) {
//         showError(phone, "Phone is required");
//         isValid = false;
//       } else if (phoneDigits.length < 10) {
//         showError(phone, "Invalid phone number");
//         isValid = false;
//       }

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!email.value.trim()) {
//         showError(email, "Email is required");
//         isValid = false;
//       } else if (!emailRegex.test(email.value)) {
//         showError(email, "Invalid email format");
//         isValid = false;
//       }

//       if (!experience.value) {
//         showError(experience, "Please select experience level");
//         isValid = false;
//       }

//       const checkedSkills = Array.from(skillInputs).filter((i) => i.checked);
//       if (checkedSkills.length === 0) {
//         showError(skillInputs[0].parentElement, "Select at least one skill");
//         isValid = false;
//       }

//       if (!cv.files.length) {
//         showError(cv, "Please upload your CV");
//         isValid = false;
//       }

//       if (comment.value.length > 300) {
//         showError(comment, "Max 300 characters allowed");
//         isValid = false;
//       }

//       if (isValid) {
//         const formData = {
//           name: name.value.trim(),
//           phone: phone.value.trim(),
//           email: email.value.trim(),
//           experience: experience.value,
//           skills: checkedSkills.map((s) => s.value),
//           cv: cv.files[0]?.name,
//           comment: comment.value.trim(),
//         };

//         console.log(formData);

//         alert("Application submitted successfully!");
//         form.reset();
//       }
//     });
//   });
// })();
(() => {
const form = document.querySelector("[validation-form]");

if (!form) {
  console.error("Validation form not found");
} else {
  const name = document.getElementById("user-name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const experience = document.getElementById("experience");
  const comment = document.getElementById("user-comment");
  const cv = document.getElementById("cv");
  const skillInputs = document.querySelectorAll('input[name="skills"]');

  function clearErrors() {
    document.querySelectorAll(".error").forEach(error => error.remove());
  }

  function showError(element, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = message;
    error.style.color = "red";
    error.style.fontSize = "12px";
    error.style.marginTop = "4px";

    element.appendChild(error);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      clearErrors();

      let isValid = true;

      // Name
      const nameRegex = /^[A-Za-z\s]{2,}$/;

      if (!name.value.trim()) {
        showError(name.parentElement, "Name is required");
        isValid = false;
      } else if (!nameRegex.test(name.value.trim())) {
        showError(name.parentElement, "Only letters, minimum 2 characters");
        isValid = false;
      }

      // Phone
      const phoneDigits = phone.value.replace(/\D/g, "");

      if (!phone.value.trim()) {
        showError(phone.parentElement, "Phone is required");
        isValid = false;
      } else if (phoneDigits.length < 10) {
        showError(phone.parentElement, "Invalid phone number");
        isValid = false;
      }

      // Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email.value.trim()) {
        showError(email.parentElement, "Email is required");
        isValid = false;
      } else if (!emailRegex.test(email.value.trim())) {
        showError(email.parentElement, "Invalid email format");
        isValid = false;
      }

      // Experience
      if (!experience.value) {
        showError(
          experience.closest(".modal-field"),
          "Please select experience level"
        );
        isValid = false;
      }

      // Skills
      const checkedSkills = [...skillInputs].filter(skill => skill.checked);

      if (checkedSkills.length === 0) {
        showError(
          skillInputs[0].closest(".modal-field"),
          "Select at least one skill"
        );
        isValid = false;
      }

      // CV
      if (!cv.files.length) {
        showError(
          cv.closest(".modal-field"),
          "Please upload your CV"
        );
        isValid = false;
      }

      // Comment
      if (comment.value.length > 300) {
        showError(
          comment.closest(".modal-field"),
          "Maximum 300 characters allowed"
        );
        isValid = false;
      }

      if (!isValid) return;

      const formData = {
        name: name.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        experience: experience.value,
        skills: checkedSkills.map(skill => skill.value),
        cv: cv.files[0].name,
        comment: comment.value.trim(),
      };

      console.log("Form Data:", formData);

      alert("Application submitted successfully!");

      form.reset();
    } catch (error) {
      console.error("Validation error:", error);
    }
  });
}
  })();

// This script validates the job application form before submission. It checks
// that all required fields. Error messages are displayed next to
// invalid fields to help the user correct any mistakes. If all validation
// checks pass, the form data is collected into an object, also it delete space by using trim function,
// and reset the form.
