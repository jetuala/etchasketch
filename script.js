// make row of 16 divs

let mainSketchContainer = document.getElementById("mainSketchContainer");

for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.id = "row" + j + "col" + i;
        div.className = "block";
        div.addEventListener("mouseover", function() {
            div.classList.add("drawn");
        })

        mainSketchContainer.append(div);
    }
}

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function() {
    let divs = document.querySelectorAll(".block");
    divs.forEach((div) => div.classList.remove("drawn"));
})