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

// CreatePixelFunctionality

const anchors = [16, 25, 36, 49, 64, 81, 100];
const anchoContainer = 500;
const altoContainer = 500;

    // setAnchoredValue gestiona el inputRange para que solo pueda moverse por los valores de anchor

function setAnchoredValue(value) {
    const closest = anchors.reduce((prev, curr) =>
        Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    inputRange.value = closest;
    inputValueDiv.textContent = `${closest}px`;
    updatePixelSize();
}

function updatePixelSize() {
    const inputValue = inputRange.value;
    drawDiv.innerHTML = '';

    // xyPixel calcula el tamaño final de cada pixel

    const xyPixel = (() => {
        const areaContainer = anchoContainer * altoContainer;
        const areaPixel = areaContainer / inputValue;
        return Math.floor(Math.sqrt(areaPixel));
    })();

    // for crea divs (pixeles) y los añade a drawDiv

    for (let i = 0; i < inputValue; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelStyle');
        pixel.style.width = `${xyPixel}px`;
        pixel.style.height = `${xyPixel}px`;
        drawDiv.appendChild(pixel);
    }
}

// Este es el evento

inputRange.addEventListener('change', () => setAnchoredValue(inputRange.value));

setAnchoredValue(inputRange.value);