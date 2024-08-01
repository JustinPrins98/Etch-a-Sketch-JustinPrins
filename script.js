let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);

    document.querySelector("body").addEventListener("click", function (e) {
        if (e.target.tagname != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if (click) {
                draw.textContent = "Now you can draw Picasso";
            } else {
                draw.textContent = "You are no allowed to draw";
            }
        }
    })

    let btnPopup = document.querySelector("#popup");
    btnPopup.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);
    })
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;

    for (let i = 0; i < numberDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#showMessage");
    if (input == "") {
        message.textContent = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.textContent = "Provide a number between 1 and 100";
    } else {
        message.textContent = "Let's go Picasso";
        return input;
    }
}

function colorDiv() {
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function setResetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

