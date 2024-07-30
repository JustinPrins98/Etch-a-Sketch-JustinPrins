// Create a div inside the containerdiv
const gridContainer = document.querySelector("#gridContainer");
// Create this div 16 times
for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    box.classList.add("grid-box");
    gridContainer.appendChild(box);
};