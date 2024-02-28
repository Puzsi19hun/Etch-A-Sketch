const draw = document.querySelector(".draw");
const sliderVal = document.querySelector("#sliderVal");
const slider = document.querySelector(".slider");
var mode = "Draw";
var darken = document.querySelector(".progdark")
var squareSize = 8;

createGrid(squareSize)

function slide() {
    sliderVal.innerText = slider.value;
}

function progdarkon() {
    if (darken.checked) {
        progressiveDark = true;
    }
    else {
        progressiveDark = false;
    }

}



function drawing() {
    mode = "Draw";
}

function clear() {
    reset();
}

function erase() {
    mode = "Erase";
}


function createDiv(size) {
    const div = document.createElement("div");
    div.style.border = "0.5px black solid";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.addEventListener('mouseover', colorDiv)
    return div;
}

function colorDiv()
{
    if(mode == "Draw"){this.style.backgroundColor = document.querySelector(".color").value;}
    else{this.style.backgroundColor = 'white';}
}


function changeGrid() {
    squareSize = slider.value;
    reset();
    createGrid(squareSize);
}

function createGrid(Gridsize) {
    for (let i = 0; i < Gridsize; i++) {
        for (let j = 0; j < Gridsize; j++) {
            draw.appendChild(createDiv(draw.clientWidth / Gridsize));
        }

    }
}

function reset() {
    draw.replaceChildren()
}

