let savedList = localStorage.getItem("task_list");
if (savedList) {
  document.getElementById("task_list").innerHTML = savedList;
}

const inputForm = document.getElementById("input_form");
inputForm.addEventListener("submit", addNewTask);

function addNewTask(event) {
  event.preventDefault();

  const taskList = document.getElementById("task_list");
  const newTask = document.getElementById("input_field");

  let li = document.createElement("li");
  li.innerText = newTask.value;

  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Done";
  doneBtn.addEventListener("click", deleteTask);

  li.appendChild(doneBtn);
  taskList.appendChild(li);

  localStorage.setItem("task_list", taskList.innerHTML);

  newTask.value = "";
}

function deleteTask(event) {
  const task = event.target.parentElement;
  task.remove();

  const taskList = document.getElementById("task_list");
  localStorage.setItem("task_list", taskList.innerHTML);
}
