//attempt number two

//there should be an isvalid function

/*
    test board


*/ 

const EMPTY = ".";

const possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//test board
var testBoard = [["9", "."],
                 [".", "4"]];

var solveSudoku = function (board) {
    let emptySpaces = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {

            if (board[i][j] === EMPTY) {
                emptySpaces.push({ row: i, col: j });
            }
        }
    }
    function recurse(emptySpaceIndex) {
        
        // base case -end;
        if (emptySpaceIndex >= emptySpaces.length) {
            return true;
        }

        const { row, col } = emptySpaces[emptySpaceIndex];

        for (let i = 0; i < possibleNumbers.length; i++) {
            let num = possibleNumbers[i];
            //check if valid
            if (validNumber(num, row, col, board)) {
                board = num;
                //recurse
                if (recurse(emptySpaceIndex + 1)) {
                    return true;
                }
                //backtrack
                board[row][col] = EMPTY;
            }
        }
        return false;
        
        }
    recurse(0);
    return board;
    }

function validNumber(number, row, col, board) { //function determines whether number placement is valid
    //the function returns false if the number is invalid.
    for (i = 0; i < (board.length); i++) {
        for (j = 0; j < (board.length); j++) {
            //console.log("i = " + (i + 1) + " + j = " + (j + 1)) //** was just double checking the loop values; i is row pos of loop
            if (board[row][i] === number || board[i][col] === number) {
                return false; //signifying that the number is not valid
            }
        }
        // we'll need to create a loop to check the subgrids

        //starting points for subgrids
            // checks the whole subgrid unless the row is the last row in the grid (in which case in checks the last row only)
        let subRowStart = Math.floor(row / 3) * 3; // eg. if the row is 9/3 = 3, the value returned is either going to be 
        let subColStart = Math.floor(col / 3) * 3; 

        for (let i = subRowStart; i < board.length; i++) { //we need to now loop through
            for (let j = subColStart; j < board.length; j++) {
                if (board[j][i] === number || board[i][j] === number) {
                    return false;
                }
            }
        }
    }
    //if the number passes through the conditions above then the number is valid
    return true;
}

console.log(solveSudoku(testBoard))
console.log("---------End");
