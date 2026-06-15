(() => {
  const modals = document.querySelectorAll("[data-modal]");
  document.querySelectorAll("[data-modal-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.modalOpen;
      const modal = document.querySelector(`[data-modal="${id}"]`);
      modal.classList.remove("is-hidden");
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.modalClose;
      const modal = document.querySelector(`[data-modal="${id}"]`);
      modal.classList.add("is-hidden");
    });
  });

 
//   modals.forEach((modal) => {
//   modal.addEventListener("click", (e) => {
//     if (e.target.classList.contains("backdrop")) {
//       modal.classList.add("is-hidden");
//     }
//   }); 
// });
})();

// This script manages multiple modal windows on the webpage. It uses the
// data-modal-open and data-modal-close attributes to identify which buttons
// open or close a spefic modal which is being identified by its id  