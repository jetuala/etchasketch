// variable declarations

let mainSketchContainer = document.getElementById("mainSketchContainer");
let clearBtn = document.getElementById("clearBtn");
let numberOfBlocks = 64; // number of blocks per side! :)

// event handlers

clearBtn.addEventListener("click", function() {
    let divs = document.querySelectorAll(".block");
    divs.forEach((div) => div.classList.remove("drawn"));
    promptSides();
})

function getRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function promptSides() {
    numberOfBlocks = prompt("How many blocks per side do you want?");
    removeBoard();
    createBoard();
}

function removeBoard() {
    let allDivs = document.querySelectorAll(".row");
    allDivs.forEach((div) => div.remove() )
}

function createBoard() {
    for (let j = 0; j < numberOfBlocks; j++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = "row";
        for (let i = 0; i < numberOfBlocks; i++) {
            let colDiv = document.createElement('div');
            colDiv.id = "row" + j + "col" + i;
            colDiv.className = "block";
            colDiv.addEventListener("mouseover", function() {
                colDiv.style.backgroundColor = "#" + getRandomColor(); 
                colDiv.classList.add("drawn");
            })

            rowDiv.append(colDiv);
        }
        mainSketchContainer.append(rowDiv);
    }
}

createBoard();