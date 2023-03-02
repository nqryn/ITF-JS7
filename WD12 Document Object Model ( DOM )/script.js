// how to get a single element?
const firstParagraph = document.getElementById("first-paragraph");
firstParagraph.style.backgroundColor = "blue";
firstParagraph.textContent = "lorem";
//
const thirdElement = document.getElementsByClassName("third-element")[0];
thirdElement.innerHTML = "this is <b>bold</b>";

const h2 = document.getElementsByTagName("h2");
h2[0].style.color = "red";
h2[1].style.color = "blue";

const myList = document.createElement("ul");
const listItem = document.createElement("li");
listItem.textContent = "coffee";
myList.appendChild(listItem);
const idUnic = document.querySelector("#unic");
idUnic.appendChild(myList);

h2[1].remove();

//events listeners

h2[0].addEventListener("mouseenter", function (event) {
  console.log("you enter", event.target);
  event.target.style.backgroundColor = "pink";
});
h2[0].addEventListener("mouseleave", function (event) {
  console.log("you left");
  event.target.style.backgroundColor = "white";
});
// h2[0].addEventListener("mouseout", function (event) {
//   console.log("you left");
//   event.target.style.backgroundColor = "white";
// });
const inputBox = document.querySelector("#url1");
inputBox.addEventListener("keydown", function (event) {
  console.log(event.keyCode);
});

localStorage.setItem("language", "romanian");
