document.addEventListener('DOMContentLoaded', function () {
  const leftContainer = document.getElementById("leftContainer");
  const rightContainer = document.getElementById("rightContainer");
  const successMessage = document.getElementById("successMessage");
  const resetButton = document.getElementById("resetButton");

  // Add event listeners for drag events left to right
  leftContainer.addEventListener("dragstart", function (event) {
    event.target.classList.add("dragging");
  });

  leftContainer.addEventListener("dragend", function (event) {
    event.target.classList.remove("dragging");
  });

  rightContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
    rightContainer.classList.add("dragover");
  });

  rightContainer.addEventListener("dragleave", function (event) {
    rightContainer.classList.remove("dragover");
  });

  rightContainer.addEventListener("drop", function (event) {
    event.preventDefault();
    rightContainer.classList.remove("dragover");
    const draggedItem = document.querySelector(".dragging");
    rightContainer.appendChild(draggedItem);
    successMessage.classList.remove("hidden");
    setTimeout(function () {
      successMessage.classList.add("hidden");
    }, 2000);
  });

  // Add event listeners for drag events right to left
  rightContainer.addEventListener("dragstart", function (event) {
    event.target.classList.add("dragging");
  });

  rightContainer.addEventListener("dragend", function (event) {
    event.target.classList.remove("dragging");
  });

  leftContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
    leftContainer.classList.add("dragover");
  });

  leftContainer.addEventListener("dragleave", function (event) {
    leftContainer.classList.remove("dragover");
  });

  leftContainer.addEventListener("drop", function (event) {
    event.preventDefault();
    leftContainer.classList.remove("dragover");
    const draggedItem = document.querySelector(".dragging");
    leftContainer.appendChild(draggedItem);
    successMessage.classList.remove("hidden");
    setTimeout(function () {
      successMessage.classList.add("hidden");
    }, 2000);
  });

  resetButton.addEventListener("click", function () {
    rightContainer.innerHTML = "";
    leftContainer.innerHTML = `
      <div class="list" draggable="true">List Item 1</div>
      <div class="list" draggable="true">List Item 2</div>
      <div class="list" draggable="true">List Item 3</div>
      <div class="list" draggable="true">List Item 4</div>
      `;
  });
});
