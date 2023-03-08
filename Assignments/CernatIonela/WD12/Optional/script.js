var square = document.getElementById("square");

square.addEventListener("click", function() {
  var x = Math.floor(Math.random() * 450);
  var y = Math.floor(Math.random() * 450);
  square.style.top = y + "px";
  square.style.left = x + "px";
});