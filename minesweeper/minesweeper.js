document.addEventListener("DOMContentLoaded", startGame);

// Define your `board` object here!
var board = {
    cells: [{
        row: 0,
        col: 0,
        isMine: true,
        hidden: true
    }, {
        row: 1,
        col: 0,
        isMine: true,
        hidden: true
    }, {
        row: 2,
        col: 0,
        isMine: true,
        hidden: true
    }, {
        row: 0,
        col: 1,
        isMine: true,
        hidden: true
    }, {
        row: 1,
        col: 1,
        isMine: false,
        hidden: true
    }, {
        row: 2,
        col: 1,
        isMine: false,
        hidden: false
    }, {
        row: 0,
        col: 2,
        isMine: true,
        hidden: false
    }, {
        row: 1,
        col: 2,
        isMine: false,
        hidden: true
    }, {
        row: 2,
        col: 2,
        isMine: true,
        hidden: true
    }


  ]


};

function startGame() {
    var arrayLength = board.cells.length -1;
    for(var _ = 0; _ <= arrayLength; _++){
        board.cells[_].surroundingMines = countSurroundingMines(board.cells[_]);

    }
    // Don't remove this function call: it makes the game work!
    lib.initBoard();
    document.addEventListener("click",checkForWin);
    document.addEventListener("contextMenu",checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

    if (checkIsMarked() == true){
        lib.displayMessage("You win!");
    }
    // You can use this function call to declare a winner (once you've
    // detected that they've won, that is!)


}

var checkIsMarked = function() {
// lib.getSurroundCells() returns an array of surrounding cells

    var arrayLength = board.cells.length -1;
    var checkArray = [];
    for(var _ = 0; _ <= arrayLength; _++){
        if(board.cells[_].isMarked == true && board.cells[_].isMine == true) {
            checkArray.push(true);
        } else if(board.cells[_].isMine == true) {
            checkArray.push(false);
        }
    }
    if(checkArray.indexOf(false) == -1 ){
        return true;
    } else {
        return false;


    }
};

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
// lib.getSurroundCells() returns an array of surrounding cells

    var surrounding = lib.getSurroundingCells(cell.row, cell.col).length;
    var arrayLength = surrounding.length -1;

    var counter = false;
    for(var _ = 0; _ <= arrayLength; _++){
        if(surrounding[_].isMine == true) {
            counter = true;
        }
        return counter;
    }
}
