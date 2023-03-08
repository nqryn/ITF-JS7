var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.createElement("button");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    deleteButton.innerHTML = "X";
    deleteButton.className = "delete";
    li.appendChild(deleteButton);
    deleteButton.onclick = function () {
        ul.removeChild(li);
    };
}

button.addEventListener("click", function() {
    if (inputLength() > 0) {
        createListElement();
    }
})

button.addEventListener("keypress", function(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
})
