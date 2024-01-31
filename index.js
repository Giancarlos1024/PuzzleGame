document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.getElementById("puzzle-container");

    const initialState = [
        [3, 6, 7],
        [2, 1, 4],
        [5, 8, null]
    ];

    const goalState = [
        [1, 2, 3],
        [8, null, 4],
        [7, 6, 5]
    ];

    function createPuzzleBoard(state) {
        puzzleContainer.innerHTML = "";
        state.forEach((row, i) => {
            row.forEach((value, j) => {
                const puzzlePiece = document.createElement("div");
                puzzlePiece.className = "puzzle-piece";
                puzzlePiece.textContent = value !== null ? value : "";
                puzzlePiece.addEventListener("click", () => movePiece(i, j));
                puzzleContainer.appendChild(puzzlePiece);
            });
        });
    }

    function updatePuzzleBoard(state) {
        const puzzlePieces = document.querySelectorAll(".puzzle-piece");
        state.forEach((row, i) => {
            row.forEach((value, j) => {
                const index = i * 3 + j;
                puzzlePieces[index].textContent = value !== null ? value : "";
            });
        });
    }

    function movePiece(row, col) {
        const emptyPos = findEmptyPosition();
        if (isValidMove(row, col, emptyPos)) {
            puzzleState[emptyPos[0]][emptyPos[1]] = puzzleState[row][col];
            puzzleState[row][col] = null;
            updatePuzzleBoard(puzzleState);

            if (isPuzzleSolved()) {
                alert("¡Felicidades! Has resuelto el puzzle.");
            }
        }
    }


    function isValidMove(row, col, emptyPos) {
        return (
            Math.abs(row - emptyPos[0]) <= 1 &&
            Math.abs(col - emptyPos[1]) <= 1 &&
            (row === emptyPos[0] || col === emptyPos[1])
        );
    }

    function findEmptyPosition() {
        for (let i = 0; i < puzzleState.length; i++) {
            for (let j = 0; j < puzzleState[i].length; j++) {
                if (puzzleState[i][j] === null) {
                    return [i, j];
                }
            }
        }
    }

    function isPuzzleSolved() {
        return JSON.stringify(puzzleState) === JSON.stringify(goalState);
    }

    const puzzleState = JSON.parse(JSON.stringify(initialState));
    createPuzzleBoard(puzzleState);
});

let bodyTema = document.querySelector('body');
let whiteTema = document.querySelector('#white');
let darkTema = document.querySelector('#dark');

whiteTema.addEventListener('click',backgroundWhite);
darkTema.addEventListener('click', backgroundDark);

function backgroundWhite(){
    bodyTema.style.background = 'white';
    bodyTema.style.color = "black";
}
function backgroundDark(){
    let puzzle_piece = document.querySelector('.puzzle-piece');
    bodyTema.style.background = 'black';
    bodyTema.style.color = "white";
    bodyTema.style.fontStyle = "italic";
}