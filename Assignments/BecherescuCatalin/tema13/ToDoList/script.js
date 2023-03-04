const justDoIt = document.querySelector("#justDoIt");
const addElement = document.querySelector("#addElement");
const btn = document.querySelector("#btn");
const ol = document.createElement("ol");

btn.addEventListener("click", function () {
  const li = document.createElement("li");

  if (addElement.value.length > 0) {
    li.textContent = addElement.value;
    justDoIt.appendChild(ol);
    ol.appendChild(li);
    addElement.value = "";
  }

  li.addEventListener("click", function () {
    // li.style.textDecoration = "line-through red";
    li.remove();
  });
});

addElement.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    const li = document.createElement("li");

    if (addElement.value.length > 0) {
      li.textContent = addElement.value;
      justDoIt.appendChild(ol);
      ol.appendChild(li);
      addElement.value = "";
    }
  }
});
