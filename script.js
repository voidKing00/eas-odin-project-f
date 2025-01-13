const sketchpadContainer = document.querySelector("#sketchpad-container");

const baseRowContainer = document.createElement("div");
baseRowContainer.style.display = "flex";

const basePixel = document.createElement("div");
basePixel.classList.add("pixel");

let paintMode;

sketchpadContainer.addEventListener("mousedown", () => paintMode = true);
sketchpadContainer.addEventListener("mouseup", () => paintMode = false);

let gridLength = 50;

for(let i = 0; i < gridLength; i++){

    const cloneRowContainer = baseRowContainer.cloneNode();

    for(let i = 0; i < gridLength; i++){

        const clonePixel = basePixel.cloneNode();

        clonePixel.addEventListener("mouseover" , () => {

            if(paintMode) clonePixel.style.backgroundColor = "black";
  
        });

        cloneRowContainer.appendChild(clonePixel);
        
    }

    sketchpadContainer.appendChild(cloneRowContainer);

}





