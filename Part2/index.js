const idInput = document.querySelector("#idInput");
const colorInput = document.querySelector("#colorInput");

console.log(idInput);
console.log(colorInput);

function setCard() {
const card = document.querySelector(`#${idInput.value}`);
  console.log(card);
}

document.querySelector("#editCardButton").addEventListener("click", setCard);