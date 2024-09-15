const btnCreate = document.querySelector('.dccButtonCreate');
const btnClear = document.querySelector('.dccButtonClear');

const colorButtons = {
    black: document.querySelector('.colorBlack'),
    white: document.querySelector('.colorWhite'),
    red: document.querySelector('.colorRed'),
    blue: document.querySelector('.colorBlue'),
    green: document.querySelector('.colorGreen'),
    yellow: document.querySelector('.colorYellow'),
    aqua: document.querySelector('.colorAqua'),
    magenta: document.querySelector('.colorMagenta'),
    orange: document.querySelector('.colorOrange'),
    grey: document.querySelector('.colorGrey'),
    rainbow: document.querySelector('.colorRainbow'),
    eraser: document.querySelector('.eraser')
};

const inputRange = document.querySelector('.inputRangeDiv_input');
const inputValueDiv = document.querySelector('.inputRangeDiv_value');
const drawDiv = document.querySelector('.drawDiv');

// CreatePixelFunctionality

const anchors = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961];const anchoContainer = 500;
const altoContainer = 500;

const setAnchoredValue = (value) => {
    const closest = anchors.reduce((prev, curr) =>
        Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
    inputRange.value = closest;
    inputValueDiv.textContent = `${closest}px`;
    return closest;
};

const createPixel = () => {
    const inputValue = setAnchoredValue(inputRange.value);
    drawDiv.innerHTML = '';
    
    // updatePixelSize
    const xyPixel = Math.floor(Math.sqrt((anchoContainer * altoContainer) / inputValue));
    
    for (let i = 0; i < inputValue; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixelStyle');
        pixel.style.width = `${xyPixel}px`;
        pixel.style.height = `${xyPixel}px`;
        drawDiv.appendChild(pixel);
    }
    
};

inputRange.addEventListener('input', () => {
    setAnchoredValue(inputRange.value);
});

btnCreate.addEventListener('click', createPixel);

setAnchoredValue(inputRange.value);