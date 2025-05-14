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

const bottomSheet = document.querySelector(".modal-dialog");
const dragHandle = document.querySelector(".drag-handle");

let isDragging = false;
let startY, startBottom;

function startDragging(e) {
    console.log("there");
    e.preventDefault();
    isDragging = true;
    startY = e.clientY;
    startBottom = parseInt(getComputedStyle(bottomSheet).bottom);

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);
}

function drag(e) {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    bottomSheet.style.bottom = Math.max(startBottom - deltaY, 0) + "px";
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
}

dragHandle.addEventListener("mousedown", startDragging);