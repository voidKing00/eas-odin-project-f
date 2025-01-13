function createCanvas(gridSize){

    for(let i = 0; i < gridSize; i++){

        const cloneRowContainer = baseRowContainer.cloneNode();
    
        for(let j = 0; j < gridSize; j++){
    
            const clonePixel = basePixel.cloneNode();
    
            clonePixel.addEventListener("mouseover" , () => {
    
                if(paintMode) clonePixel.style.backgroundColor = "black";
      
            });
    
            cloneRowContainer.appendChild(clonePixel);
            
        }
    
        sketchpadContainer.appendChild(cloneRowContainer);
    
    }
}

const DEFAULT_GRID_SIZE = 16;

let sketchpadContainer = document.createElement("div");
sketchpadContainer.classList.add("sketchpad-container");
document.body.appendChild(sketchpadContainer);

const baseRowContainer = document.createElement("div");
baseRowContainer.style.display = "flex";

const basePixel = document.createElement("div");
basePixel.classList.add("pixel");

let paintMode;
createCanvas(DEFAULT_GRID_SIZE);
sketchpadContainer.addEventListener("mousedown", () => paintMode = true);
sketchpadContainer.addEventListener("mouseup", () => paintMode = false);

const inputBar = document.querySelector("#grid-size-input");
const button = document.querySelector("button");

button.addEventListener("click", () =>{

    let gridSize = parseInt(inputBar.value);

    if(gridSize < 1){

        inputBar.value = "";
        alert("Size cant be less than 1");
        return;

    }else if(gridSize > 100){

        inputBar.value = "";
        alert("Size cant be greater than 100");
        return;

    }else if(isNaN(gridSize)){

        alert("Size cannot be empty")
        return;

    }
    
    inputBar.value = "";

    document.body.removeChild(sketchpadContainer);

    sketchpadContainer = document.createElement("div");
    sketchpadContainer.classList.add("sketchpad-container");
    sketchpadContainer.addEventListener("mousedown", () => paintMode = true);
    sketchpadContainer.addEventListener("mouseup", () => paintMode = false);

    document.body.appendChild(sketchpadContainer);

    createCanvas(gridSize);
    
})



