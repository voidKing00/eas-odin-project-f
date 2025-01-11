console.log("test connection");

const sketchpadContainer = document.querySelector("#sketchpad-container");
const baseRowContainer = document.createElement("div");

const basePixel = document.createElement("div");
basePixel.classList.add("pixel");

baseRowContainer.style.display = "flex";

let gridLength = 16;

for(let i = 0; i < gridLength; i++){

    const clonePixel = basePixel.cloneNode();
    baseRowContainer.appendChild(clonePixel);
    
}

for(let i = 0; i < gridLength; i++){

    const cloneRowContainer = baseRowContainer.cloneNode(true);
    sketchpadContainer.appendChild(cloneRowContainer);

}
// sketchpadContainer.appendChild(baseRowContainer);
// sketchpadContainer.appendChild(cloneRowContainer);

