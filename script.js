document.addEventListener("DOMContentLoaded", () => {

    // Create a div inside the containerdiv
    const gridContainer = document.querySelector("#gridContainer");

    function createGridBoxes(amount) {
        // Clear existing grid boxes
        gridContainer.textContent = "";
        // Create this div amount of times
        for (let i = 0; i < amount; i++) {
            let box = document.createElement("div");
            box.classList.add("grid-box");
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "black";
            });
            gridContainer.appendChild(box);
        };
    }

    createGridBoxes(16);


    function setAmount() {
        let amount = parseInt(input.value);
        if (amount > 100 || amount < 0) {
            let warningText = document.createElement("p");
            warningText.textContent = "Number should be between 0 - 100";
            input.appendChild(warningText);
        }
        else {
            createGridBoxes(amount);
        }
    }

    let input = document.querySelector("input")
    input.addEventListener("input", (setAmount));

});