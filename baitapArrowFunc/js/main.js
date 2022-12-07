
// array color
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let container = document.getElementById("colorContainer");

loadColorPick = () => {
    container.innerHTML += `
            <button class="color-button ${colorList[0]} active"></button>
        `;

    for (let i = 1; i < colorList.length; i++) {
        container.innerHTML += `
            <button class="color-button ${colorList[i]}"></button>
        `;
    }
}

loadColorPick();

/**
 * Add event click for button
 * Step1: get all button 
 * Step2: add event onclick
 * */

let colorButtonList = document.getElementsByClassName("color-button");
let houseELE = document.getElementById("house");

for (let i = 0; i < colorButtonList.length; i++) {
    colorButtonList[i].addEventListener("click", () => {
        changeColor(i);
    });
}


/**
 * Step1: remove all active
 * Step2: add active to color idColor
 * Step3: add color idColor to house
 * */ 

changeColor = (idColor) => {
    console.log("Change color house: ", idColor);
    // Step1: remove all active
    for (let i = 0; i < colorButtonList.length; i++) {
        colorButtonList[i].classList.remove("active");
    }

    // Step2: add active to color idColor
    colorButtonList[idColor].classList.add("active");

    // Step3: add color i to house
    houseELE.className = "house " + colorList[idColor];
}