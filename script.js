window.addEventListener("DOMContentLoaded", (event) => {
  const dialog = document.querySelector(".modal-dialog");
  dialog?.addEventListener('click', event => {
      if (event.target === dialog) {
        dialog.close();
      }
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  const headerBurger = document.querySelector(".header-burger-button");
  headerBurger?.addEventListener('click', event => {
     document.querySelector(".header-sidebar").style.transform = "translateX(0%)";
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  const headerClose = document.querySelector(".header-sidebar-close-button");
  headerClose?.addEventListener('click', event => {
     document.querySelector(".header-sidebar").style.transform = "translateX(100%)";
  });
});
