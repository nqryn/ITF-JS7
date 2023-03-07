const addToDoButton = document.getElementsByClassName("addTask")[0];
const toDoContainer = document.getElementsByClassName("toDoContainer")[0];
const inputField = document.getElementsByClassName("inputField")[0];
const username = localStorage.getItem("username") || "";

addToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
