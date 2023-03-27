/*

let x = "x";

//just need to reverse the below to create a pyramid

for (let number = 7; number >= 1; number = number - 1) {
    console.log(x);
    x = x + "x";
}

x = "x";

for (let number = 1; number <= 7; number = number + 1) {
        console.log(x);
        x = x + "x";
}

*/

//the variable x should be the number of rows in the triangle. x controls size of pyramid
//the spaces will need to appear first
//then the hashes

//there is an inverse relation between hashes and spaces
//as we reduce the number of spaces we increase the number of hashes
//as x increases the spaces decrement and hashes increment

/*

//reference image

 #
  ##
   ###
    ####
     #####
      ######
       #######

//4 spaces and then 1 hash
//3 spaces and then 3 hashes
//2 spaces and then 5 hashes
//1 space and then 7 hashes
//0 spaces and then 9 hashes

//from the pattern we need to decrement var y by 1 and increment var x by 2 with a base of 1
//need to decrement a space
*/

//can't use console.log since it endsline
//maybe use two variables to store and print in the end.

number = 5;
let hashlog = "";
let spacelog = "";

//need to have a nested loop
for (let count = 1; count <= number; count++) {
    //this simply iterates through the loop
    for (let space = 1; space <= (count - number); space++) {
        spacelog = "" + " ";
    }
    //while y starts at 4 y--
    for (let hash = 0; hash < 2 * count - 1; hash++) {
        hashlog = "" + "#";
    }

    console.log(spacelog + hashlog); 
    //while x starts at 1 x=x+2
}
 


