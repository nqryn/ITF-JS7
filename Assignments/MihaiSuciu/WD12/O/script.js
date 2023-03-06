const square = document.getElementById("square");

square.addEventListener("mouseenter", moveSquare);

function moveSquare() {
    const x = Math.floor(Math.random() * (window.innerWidth - 50));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));

    square.style.top = y + "px";
    square.style.left = x + "px";
}
