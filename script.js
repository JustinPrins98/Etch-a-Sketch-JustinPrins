document.addEventListener("DOMContentLoaded", function () {




});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;

    for (let i = 0; i < numberDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}

createBoard(16);