const sketchpadContainer = document.querySelector("#sketchpad-container");

const baseRowContainer = document.createElement("div");
baseRowContainer.style.display = "flex";

const basePixel = document.createElement("div");
basePixel.classList.add("pixel");

let gridLength = 16;

for(let i = 0; i < gridLength; i++){

    const cloneRowContainer = baseRowContainer.cloneNode();

    for(let i = 0; i < gridLength; i++){

        const clonePixel = basePixel.cloneNode();

        clonePixel.addEventListener("mouseover" , () => clonePixel.style.backgroundColor = "black");

        cloneRowContainer.appendChild(clonePixel);
        
    }

    sketchpadContainer.appendChild(cloneRowContainer);

}



