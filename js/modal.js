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

 
  modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("backdrop")) {
      modal.classList.add("is-hidden");
    }
  }); 
});
})();
