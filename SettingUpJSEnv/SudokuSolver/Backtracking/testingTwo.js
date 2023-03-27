//this is for general testing

var board = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
             ["6", ".", ".", "1", "9", "5", ".", ".", "."],
             [".", "9", "8", ".", ".", ".", ".", "6", "."],
             ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
             ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
             ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
             [".", "6", ".", ".", ".", ".", "2", "8", "."],
             [".", ".", ".", "4", "1", "9", ".", ".", "5"],
             [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

//
const SPACE = ".";



//create the is valid function - which determines if the number being inserted satisfies the sudoku rules.

function isValidNumber(anyBoard, r, c, num) {
    //the three conditions
    //number must be unique in this row.

    //create for loop to iterate through the row to validate number against row
    for (let i = 0; i < anyBoard.length; i++) {
        for (let j = 0; j < anyBoard.length; j++) {
            if (anyBoard[r][i].toString() === num || anyBoard[i][c].toString() === num) {
                console.log("flag one - number is in row or column.");
                return false;
            }
        }
    }

    //to check the subgrids 3x3
    //the starting rows should be 0, 1, 2

    subgridRowStart = (Math.floor(r / 3)) * 3;
    subgridColStart = (Math.floor(c / 3)) * 3;

    gridLength = anyBoard.length / 3;

    //looping through the subgrids

    for (let i = subgridRowStart; i < gridLength; i++) {
        for (let j = subgridColStart; j < gridLength; j++) {
            if ((anyBoard[r][i] === num) || (anyBoard[r][j] === num)) {
                console.log("flag two - number is in row or column of subgrid");
                return false;
            }
        }
    }
    console.log("is a valid number.")
    return true;
}

console.log(isValidNumber(board, myRow = 2, myCol = 2, myNum = "5"));

