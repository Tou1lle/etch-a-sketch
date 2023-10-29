const gridContainer = document.querySelector(".grid-container");
const buttonSize = document.querySelector(".grid-size");

//initial size of the grid
let gridSize = 16;

//function that creates a grid + calcute size to fit and add the css
function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.style.flex = `1 0 calc(100% / ${gridSize})`;
    }
}

createGrid(gridSize);

//for each square in grid change color when hovered over
const grids = document.querySelectorAll(".grid-item");
grids.forEach(grid => {
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "black";
    });
}); 