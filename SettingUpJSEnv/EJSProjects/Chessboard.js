/*

Write a program that creates a string that represents an 8×8 grid, using new-line characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/


/*
let x = "x";
console.log(x);


if odd print

if even print 

count = 4

*/

// Write a program that creates a string that represents an 8×8 grid



// 8 times



/*
while (countOne < gridSize) {
    //this will add columns
    if (countOne % 2 == 0) { //if even then 
        console.log(countOne);
        while (count < gridSize) {
            //this will add the number of x depending on the row size chosen
            y = y + " x";
            count++;
        }
    }
    else { //not even
        while (count < gridSize) {
            //this will add the number of x depending on the row size chosen
            console.log(countOne);
            x = y + " x";
            count++;
        }
    }
    countOne++;
    console.log(y);
} */

let count = 0;
let countOne = 0;
//rowSize = 4;
let gridSize = 4;

let x = "x"
let y = " x"

let rowSize = 0;

while (countOne < gridSize) {
    //this will add columns
    let even = true; // outside of scope
    while (count < gridSize) {
        if (count % 2 == 0) { //if even then 
            even = true;
            console.log("even");
            //this will add the number of x depending on the row size chosen
            y = y + " x";
            count++;
        }
        else { //not even
            even = false;
            console.log("odd");
            x = x + " x";
            count++;
        }
        console.log(even);
    }
    console.log("even value:" + even)
    console.log(even ? y : x);
    countOne++;
}

//define a binding size = 8

//change the program so that it works for any size, outputting a grid of the given width and height

