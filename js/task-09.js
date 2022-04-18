function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const carrentBody = document.body;
const buttonChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color")


buttonChangeColor.addEventListener("click", () => {
  carrentBody.style.backgroundColor = getRandomHexColor();

  textColor.textContent = getRandomHexColor();
});





