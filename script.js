const containerDiv = document.querySelector(".container");

function createGrid(numberPerSide) {
    containerDiv.innerHTML = "";
    for(let i = 0; i < numberPerSide; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "row");
        for(let j = 0; j < numberPerSide; j++) {
            const column = document.createElement("div");
            column.setAttribute("class", "square");
            rowDiv.appendChild(column);
        }
        containerDiv.appendChild(rowDiv);
    }
}

function setSquares() {
    const input = parseInt(prompt("Set # of square per side (Max: 100)"));
    if(input > 100) {
        document.querySelector(".error-div").style.display = "block";
        document.querySelector(".error-div").innerText = "# of squares per side must be under 100";
    } else if(isNaN(input) || input < 1) {
        document.querySelector(".error-div").style.display = "block";
        document.querySelector(".error-div").innerText = "Must input a valid number";
    } else {
        document.querySelector(".error-div").style.display = "none";
        createGrid(input);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createGrid(20);
    document.querySelector(".container").addEventListener("mouseover", (event) => {
        if(event.currentTarget != event.target) {
            event.target.classList.add("black");
        }
    });

    document.querySelector("#setSquaresBtn").addEventListener("click", setSquares);
});
