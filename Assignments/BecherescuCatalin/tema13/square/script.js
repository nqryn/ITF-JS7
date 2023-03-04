const square = document.querySelector("#square");

//

square.addEventListener("click", function () {
  let x = Math.floor(Math.random() * 600 + 1);
  let y = Math.floor(Math.random() * 600 + 1);
  square.style.marginTop = String(y) + "px";
  square.style.marginLeft = String(x) + "px";
  console.log(square.style.marginTop, square.style.marginLeft);
});
