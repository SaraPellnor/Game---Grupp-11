

const circles = document.querySelectorAll(".circle");
const btnBlue = document.querySelector(".btnBlue");
const btnRed = document.querySelector(".btnRed");


btnBlue.addEventListener("click", blue);
btnRed.addEventListener("click", red);


function blue() {
    localStorage.removeItem("Active Player")
    localStorage.setItem("Active Player", "Player Blue")
}

function red() {
    localStorage.removeItem("Active Player")
    localStorage.setItem("Active Player", "Player Red")
}


for (const circle of circles) {
    circle.addEventListener("click", playerTwo);
}

function playerTwo(e) {
    e.target.style.backgroundColor = "red"
}

