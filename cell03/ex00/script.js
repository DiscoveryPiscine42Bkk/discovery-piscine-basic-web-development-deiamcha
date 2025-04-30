let changebtn = document.querySelector("button")
changebtn.addEventListener("click",() => {document.body.style.backgroundColor = generateRandomColor();})
function generateRandomColor () {let RandomColor = "#" + Math.floor(Math.random() * 16777215) . toString(16);return RandomColor;}