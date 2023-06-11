const INITIAL_SIZE = 16;
const MAX_SIZE = 100;

const body = document.querySelector('body');
const generateButton = document.querySelector('#generate-grid');
let boxGrid;

generateButton.addEventListener('click', submitSize);

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
            box.addEventListener('mouseover', (event) => {
                box.classList.add('hover-effect');
            });    
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