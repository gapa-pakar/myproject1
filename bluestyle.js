
let initMatrix = [];
const DIR_MAT = [
    [1, 0], //Down
    [0, 1], //Right
    [-1, 0], //Up
    [0, -1] //Left
];
const NUM_COL = 10;
const NUM_ROW = 10;
const NUM_FOR_EMPTY = "Empty";
const SAFETY_WALL = "Wall";
const WALL_SIZE = 1;
const DIR = 40;
let newRow;
let newCol;
let currentRow;
let currentCol;


window.addEventListener("load", (event) => {
    // manageMatrix();
    startPage();
})

function manageMatrix() {
    for (let i = 0; i < NUM_ROW + WALL_SIZE * 2; i++) {
        for (let j = 0; i < NUM_COL + WALL_SIZE * 2; j++) {
            initMatrix[i][j] = SAFETY_WALL;
        }
    }

    for (let i = WALL_SIZE; i < NUM_ROW + WALL_SIZE; i++) {
        for (let j = WALL_SIZE; j < NUM_COL + WALL_SIZE; j++) {
            initMatrix[i][j] = NUM_FOR_EMPTY
        }
    }

    console.log(initMatrix);
}

function startPage() {
    document.getElementById("start-button").addEventListener("click", onClick);
}

function onClick() {
    document.getElementById("button").style.display = "none";
    document.getElementById("button-return").style.display = "block";
    document.getElementById("button-return").addEventListener("click", (event) => {
        document.getElementById("button").style.display = "block";
        document.getElementById("button-return").style.display = "none";
    });
    // document.getElementById("start-button").addEventListener("keydown", onKeyDown)
}

// function onKeyDown(event) {
//     let keyCode = DIR - event.keyCode;

//     if (keyCode > 0 && keyCode <= 4) {
//         move(keyCode)
//     }
// }

// function move(keyCode) {
//     newRow = currentRow + DIR_MAT[keyCode][0];
//     newCol = currentCol + DIR_MAT[keyCode][1];



// }