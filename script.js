function updateArrows() {
    const items = document.querySelectorAll(".stages-list-item");
    let lastTop = items[0].offsetTop;

    items.forEach((item, index) => {
      const isNewLine = item.offsetTop !== lastTop;

      if (index == 0) return;
      items[index-1].classList.toggle('without-arrow', isNewLine);
      lastTop = item.offsetTop;
    });

    items[items.length - 1].classList.toggle('without-arrow', true);
  }

window.addEventListener('resize', updateArrows);
window.addEventListener('load', updateArrows);
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
     document.querySelector(".header-sidebar").style.display = "flex";
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  const headerClose = document.querySelector(".header-sidebar-close-button");
  headerClose?.addEventListener('click', event => {
     document.querySelector(".header-sidebar").style.display = "none";
  });
});
