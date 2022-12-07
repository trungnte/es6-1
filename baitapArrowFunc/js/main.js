
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