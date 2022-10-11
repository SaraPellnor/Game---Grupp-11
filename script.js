const circles = document.querySelectorAll(".circle");
const btnBlue = document.querySelector(".btnBlue");
const btnRed = document.querySelector(".btnRed");

btnBlue.addEventListener("click", blue);
btnRed.addEventListener("click", red);

function blue() {
    localStorage.setItem("Active Player", "Player Blue") //sätter nyckeln active player och värdet player blue i LS
}

function red() {
    localStorage.setItem("Active Player", "Player Red") //ersätter nyckeln active player med värdet player red i LS
}


for (const circle of circles) {
    circle.addEventListener("click", playerTwo);
}

function playerTwo(e) {
    e.target.style.backgroundColor = "blue"
}

