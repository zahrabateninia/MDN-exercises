const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button"); // select the button that comes immediately after the dialog element
const closeButton = document.querySelector("dialog button"); // select the button that is inside the dialog

showButton.addEventListener("click", () => {
    // Open the dialog modally
    dialog.showModal();
  });

closeButton.addEventListener("click", () => {
    dialog.close();
  });
