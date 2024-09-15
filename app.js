const btnCreate = document.querySelector('#buttomControlDiv .dccButtonCreate');
const btnClear = document.querySelector('#buttomControlDiv .dccButtonClear');

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

// InputFunctionally

let inputPara = document.createElement('p');
inputPara.textContent = '(16 x 16) px';
inputValueDiv.appendChild(inputPara);

inputRange.addEventListener('change', () =>{
    inputPara.textContent = `(${inputRange.value} X ${inputRange.value}) px`;
})