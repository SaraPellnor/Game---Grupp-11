

const circles = document.querySelectorAll(".circle");
const btnBlue = document.querySelector(".btnBlue");
const btnRed = document.querySelector(".btnRed");

btnBlue.addEventListener("click", blue);
btnRed.addEventListener("click", red);

const goBlue = localStorage.getItem ("player");

function blue() {
    localStorage.setItem("player", JSON.stringify (goBlue));
}


for (const circle of circles) {
    circle.addEventListener("click", playerTwo);
}

function playerTwo(e) {
    e.target.style.backgroundColor = "red"
}

