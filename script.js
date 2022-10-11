

const circles = document.querySelectorAll(".circle");

for (const circle of circles) {
    circle.addEventListener("click", playerTwo);
}


function playerTwo(e) {
    e.target.style.backgroundColor = "red"

}