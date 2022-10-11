const circles = document.querySelectorAll(".circle");
const btnBlue = document.querySelector(".btnBlue");
const btnRed = document.querySelector(".btnRed");
const header = document.querySelector(".currentPlayer")

btnBlue.addEventListener("click", blue);
btnRed.addEventListener("click", red);

function blue() {
    header.style.backgroundColor = "blue"; //ändrar färgen i headern
    localStorage.setItem("Active Player", "Player Blue") //sätter nyckeln active player och värdet player blue i LS

    for (const circle of circles) {
        circle.addEventListener("click", playerOne);
    }
    
    function playerOne(e) {
        e.target.style.backgroundColor = "blue"
    }
}

function red() {
    header.style.backgroundColor = "red";//ändrar färgen i headern
    localStorage.setItem("Active Player", "Player Red") //ersätter nyckeln active player med värdet player red i LS
    for (const circle of circles) { //vi satte in for-loopen i funktionerna för red eller blue 
        circle.addEventListener("click", playerTwo);
    }
    
    function playerTwo(e) {
        e.target.style.backgroundColor = "red"
    }
}


