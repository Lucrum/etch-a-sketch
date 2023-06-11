const INITIAL_SIZE = 16;
const MAX_SIZE = 100;
let FANCY = false;

const body = document.querySelector('body');
const generateButton = document.querySelector('#generate-grid');
const fancyToggle = document.querySelector('#fancy-mode');
let boxGrid;

generateButton.addEventListener('click', submitSize);
fancyToggle.addEventListener('change', function() {
    if (this.checked) {
        FANCY = true;
    } else {
        FANCY = false;
    }
});

generate(INITIAL_SIZE);

function generate(size) {
    boxGrid = document.createElement('div');
    boxGrid.classList.add('box-grid');

    for (let y = 0; y < size; y++) {
        const boxRow = document.createElement('div');
        boxRow.classList.add('cell-row');
        for (let x = 0; x < size; x++) {
            const box = document.createElement('div');
            box.classList.add('cell');
            box.dataset.coord = [x, y];
            box.addEventListener('mouseover', highlight);    
            boxRow.appendChild(box);
        }
    
        boxGrid.appendChild(boxRow);
    }

    body.appendChild(boxGrid);
}

function submitSize() {
    let size = +prompt("Enter grid size: ");

    if (size <=0) {
        size = INITIAL_SIZE;
    }

    if (size <= MAX_SIZE) {
        boxGrid.remove();
        generate(size);
    } else {
        alert("Invalid size. Size should be less than 100.");
    }
}

function highlight(event) {
    if (!FANCY) {
        event.target.style.backgroundColor = 'black';
    } else {
        const col = randomRGB();
        console.log(col);
        event.target.style.backgroundColor = col;
    }
}

function randomBetween(min, max){
    return (min + Math.floor(Math.random() * (max - min + 1)));
}

function randomRGB() {
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}

