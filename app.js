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
    slateBlue: document.querySelector('.colorSlateBlue'),
    rainbow: document.querySelector('.colorRainbow'),
    eraser: document.querySelector('.eraser')
};

const inputRange = document.querySelector('.inputRangeDiv_input');
const inputValueDiv = document.querySelector('.inputRangeDiv_value');
const drawDiv = document.querySelector('.drawDiv');

// Funcionalidad para crear píxeles

const anchors = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961];
const anchoContainer = 500;
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
    
    // Actualiza el tamaño de los píxeles
    const xyPixel = Math.sqrt((anchoContainer * altoContainer) / inputValue);
    
    for (let i = 0; i < inputValue; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixelStyle');
        pixel.style.width = `${xyPixel}px`;
        pixel.style.height = `${xyPixel}px`;
        drawDiv.appendChild(pixel);

        // Agrega eventos para pintar
        pixel.addEventListener('mousedown', function() {
            isDrawing = true;
            this.style.background = colorVar;
        });

        pixel.addEventListener('mousemove', function() {
            if (isDrawing) {
                this.style.background = colorVar;
            }
        });
    }
};

inputRange.addEventListener('input', () => {
    setAnchoredValue(inputRange.value);
});

btnCreate.addEventListener('click', createPixel);

setAnchoredValue(inputRange.value);

// Funcionalidad para obtener el color

const indicadorDiv = document.querySelector('.indicador');

let colorVar = 'var(--color-black)';

for (let color in colorButtons) {
    colorButtons[color].addEventListener('click', function() {
        colorVar = this.dataset.color;
        indicadorDiv.style.background = colorVar;
    });
}

// Funcionalidad para limpiar

btnClear.addEventListener('click', ()=>{
    const pixels = drawDiv.querySelectorAll('.pixelStyle');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'var(--transparent)';
    });
});

// Gestionar el estado de dibujo
let isDrawing = false;

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

drawDiv.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('pixelStyle')) {
        isDrawing = true;
        event.target.style.backgroundColor = colorVar;
    }
});

drawDiv.addEventListener('mousemove', (event) => {
    if (isDrawing && event.target.classList.contains('pixelStyle')) {
        event.target.style.backgroundColor = colorVar;
    }
});
