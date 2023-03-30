let addToDoButton = document.getElementById("addToDo");
let myList = document.getElementById("myList");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  let task = document.createElement("li");
  task.innerText = inputField.value;
  myList.appendChild(task);
  inputField.value = "";
  task.addEventListener("click", function () {
    task.style.textDecoration = "line-through";
  });
  task.addEventListener("dblclick", function () {
    myList.removeChild(task);
  });
});
