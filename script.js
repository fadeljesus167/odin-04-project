const rootDiv = document.querySelector("#grid");
let gridSize = 0;

const button = document.querySelector("button");
button.addEventListener("click", () => {
    rootDiv.replaceChildren();
    gridSize = prompt("Input grid size");
    generateGrid(gridSize);
});

function generateSquare(size){
    const div = document.createElement("div");
    // 900 is the width of the grid and the -2 is because every square has 1px border
    const squareSize = 900/size - 2;
    div.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`
    div.classList.add("square");
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "lightgray";
    });

    return div;
}

function generateGrid(size) {
    if(size > 0 && size < 100){
        for(i=0; i<size*size; i++){
            rootDiv.appendChild(generateSquare(size));
        }
    }else{
        alert('invalid grid size');
    }
}
