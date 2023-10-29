const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
}

const buttons = document.querySelectorAll(".grid-item");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "black";
    });
});