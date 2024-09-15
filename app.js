// const { createElement } = require("react");

const btnCreate = document.querySelector('.dccButtonCreate');
const btnClear = document.querySelector('.dccButtonClear');

const btnColorBlack = document.querySelector('.colorBlack');
const btnColorWhite = document.querySelector('.colorWhite');
const btnColorRed = document.querySelector('.colorRed');
const btnColorBlue = document.querySelector('.colorBlue');
const btnColorGreen = document.querySelector('.colorGreen');
const btnColorYellow = document.querySelector('.colorYellow');
const btnColorAqua = document.querySelector('.colorAqua');
const btnColorMagenta = document.querySelector('.colorMagenta');
const btnColorOrange = document.querySelector('.colorOrange');
const btnColorGrey = document.querySelector('.colorGrey');
const btnColorRainbow = document.querySelector('.colorRainbow');
const btnEraser = document.querySelector('.eraser');

const inputRange = document.querySelector('.inputRangeDiv_input');
const inputValueDiv = document.querySelector('.inputRangeDiv_value');

const drawDiv = document.querySelector('.drawDiv');

// Input Functionality

let inputPara = document.createElement('p');
inputPara.textContent = '(16 x 16) px';
inputValueDiv.appendChild(inputPara);
console.log(inputRange.value);

inputRange.addEventListener('change', () =>{
    inputPara.textContent = `(${inputRange.value} X ${inputRange.value}) px`;
})

// CreatePixel Functionality
btnCreate.addEventListener('click', () => {
    let inputValue = inputRange.value;
    drawDiv.innerHTML = '';

    for (let i = 1; i <= inputValue; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixelStyle');
        drawDiv.appendChild(pixel);
    }
});
