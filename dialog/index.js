const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button"); // select the button that comes immediately after the dialog element
const closeButton = document.querySelector("dialog button"); // select the button that is inside the dialog


// Event listener for the "Show the dialog" button
showButton.addEventListener("click", () => {
    // Open the dialog modally
    dialog.showModal();
  });
