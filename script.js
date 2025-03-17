const numberOfDivs = 512;
const numberSqrt = Math.sqrt(numberOfDivs);
const containerDiv = document.querySelector(".container");

function createGrid() {
    for(let i = 0; i < numberSqrt; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "row");
        for(let j = 0; j < numberSqrt; j++) {
            const column = document.createElement("div");
            column.setAttribute("class", "square");
            rowDiv.appendChild(column);
        }
        containerDiv.appendChild(rowDiv);
    }
}

document.addEventListener("DOMContentLoaded", createGrid);
document.querySelector(".container").addEventListener("mouseover", (event) => {
    event.target.classList.add("black");
});