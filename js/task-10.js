function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberSquares = document.querySelector("#controls").querySelector("input");

const createEl = document.querySelector("[data-create]");

const destroyEl = document.querySelector("[data-destroy]");

const parentDiv = document.querySelector("#boxes");

let quantityBoxCreate;

numberSquares.addEventListener("input", (even) => {
  quantityBoxCreate = even.currentTarget.value;
});



createEl.addEventListener("click", () => createBoxes(quantityBoxCreate));


destroyEl.addEventListener("click", destroyBoxes);



function createBoxes(amount) {
  let totalBox=[];

  let widthBox = 30;
  let heigth = 30;


  for (let i = 0; i < amount; i++){
    const boxPicture = document.createElement("div");
    boxPicture.style.width = widthBox + "px";
    boxPicture.style.height = heigth + "px";
    boxPicture.style.backgroundColor = getRandomHexColor();

  
    widthBox += 10;
    heigth += 10;

    totalBox.push(boxPicture);
  }

  return parentDiv.append(...totalBox);
}

function destroyBoxes() {

  parentDiv.querySelectorAll("div").forEach(value => value.remove("div") )

}

