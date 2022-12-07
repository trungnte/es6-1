const heading = document.querySelector(".heading");
console.log(heading);

jump = (inputText) => {
    console.log(inputText);

    return [...inputText].map(c => `<span>${c}</span>`).join("");
}

heading.innerHTML = jump(heading.innerText);