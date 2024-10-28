let textInput = document.getElementById("textInput");
let remaining = document.getElementById("remaining");
let maxCount = 50;

textInput.addEventListener("input", () => {
    let currentLength = textInput.value.length;
    remaining.textContent = maxCount - currentLength;
});