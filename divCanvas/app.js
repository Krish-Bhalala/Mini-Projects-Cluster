const canvas = document.querySelector(".canvas");
const dimensionText = document.querySelector("#dimensions");
const colorPicker = document.querySelector("#colorPicker");
const dimensionSlider = document.querySelector("#dimensionSlider");
let dimensions = dimensionSlider.valueAsNumber;
let color = colorPicker.value;
const ERASER_MODE = 0;
const COLOR_MODE = 1;
const BW_MODE = 2;
let currMode = ERASER_MODE;
// console.log(colorPicker);

function clearCanvas() {
  canvas.innerHTML = "";
}
function updateCanvas() {
  clearCanvas();
  let canvasWidth = parseInt(canvas.offsetWidth);
  //let canvasHeight = parseInt(canvas.offsetHeight);
  for (let i = 0; i < dimensions * dimensions; i++) {
    let pixel = document.createElement("div");
    pixel.style.backgroundColor = "#FFFFFF";
    pixel.style.minWidth = `${canvasWidth / dimensions}px`;
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
}

function updateDimensions(newDimensionValue) {
  dimensionText.textContent = `${newDimensionValue}x${newDimensionValue}`;
  dimensions = newDimensionValue;
  updateCanvas();
}

function updateColor(newColor) {
  color = newColor;
}

function changeMode(modeID) {
  switch (modeID) {
    case COLOR_MODE:
      currMode = COLOR_MODE;
      break;
    case BW_MODE:
      currMode = BW_MODE;
      break;
    case ERASER_MODE:
      currMode = ERASER_MODE;
      break;
    default:
      currMode = ERASER_MODE;
  }
}

function main() {
  updateCanvas();
  dimensionSlider.addEventListener("input", (e) =>
    updateDimensions(e.target.valueAsNumber),
  );
  colorPicker.addEventListener("input", (e) => updateColor(e.target.value));
  document
    .querySelector("#colorMode")
    .addEventListener("click", () => changeMode(COLOR_MODE));
  document
    .querySelector("#blackMode")
    .addEventListener("click", () => changeMode(BW_MODE));
  document
    .querySelector("#eraserMode")
    .addEventListener("click", () => changeMode(ERASER_MODE));
  document
    .querySelector("#clearCanvas")
    .addEventListener("click", () => clearCanvas());
  window.addEventListener("resize", () => updateCanvas());
  pixels = document.querySelectorAll(".pixel");
  pixels.forEach(
    (e) => (e.ondragover = (e) => console.log(e.style.backgroundColor)),
  );
}

main();
