let colors = document.querySelectorAll(".color");
const colorContainer = document.querySelector(".colors");
let colorsArray = Array.from(colors);
const addBtn = document.querySelector(".add-btn");
const SubmitBtn = document.querySelector(".submit-btn");
const outputBox = document.querySelector(".output-box");
let colorValue;
let counter = 3;

const updateArray = () => {
  colors = document.querySelectorAll(".color");
  console.log(colors);
  colorsArray = Array.from(colors);
};

const createInput = (count) => {
  const color = document.createElement("div");
  color.setAttribute("class", "color");
  const input = document.createElement("input");
  input.setAttribute("type", "color");
  input.setAttribute("id", `${count}`);
  // input.setAttribute("value", "#ffffff");
  color.appendChild(input);

  return color;
};

const getColors = () => {
  let colorValue = [];
  colorsArray.forEach((color) => {
    console.log(color.children[0].value);
    colorValue.push(color.children[0].value);
  });
  return colorValue;
};

const editOutputBox = (colorValue) => {
  let gradient = "linear-gradient(";
  for (let i = 0; i < colorValue.length; ++i) {
    gradient = gradient + colorValue[i];
    if (i != colorValue.length - 1) {
      gradient = gradient + ",";
    }
  }
  outputBox.style.background = gradient;
  console.log(outputBox.style.background);
};

// copyBtn.addEventListener("click", () => {
//   outputCode.select();
//   document.execCommand("copy");
// });

SubmitBtn.addEventListener("click", () => {
  colorValue = getColors();
  console.log(colorValue);
  editOutputBox(colorValue);
});

addBtn.addEventListener("click", () => {
  const input = createInput(counter);
  ++counter;
  colorContainer.appendChild(input);
  updateArray();
  //   console.log(colorsArray);
});
