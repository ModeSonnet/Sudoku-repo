//Creates a pyramid?

/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

//the string can be easily modified from the variable list.

/*

let x = "#";
let startingPoint = 1;


while (startingPoint <= 7) {
    numberOfSymbols = 2
    while (numberOfSymbols > 0) {
        console.log()
        console.log(x);
        numberOfSymbols = numberOfSymbols - 1;
    };
    startingPoint = startingPoint + 1;
}

*/


//for some reason this creates only a single hash

/*
let number = 0;
let hashCount = 0;

while (number < 7) {
    hashCount = number;
    while (hashCount > 0) {
        console.log(x);
        hashCount = hashCount - 1;
        //console.log(hashCount);
    }
    number = number + 1;
}

*/


/*

let x = "x"
let count = 0;

for (let number = 1; number <= 7; number = number + 1) {
    count = number;
    while (count > 0) {
        console.log(x);
        x = x + "x";
        count = count - 1;
    }
}

//triangle was too big

*/

//overthinking it :) 
let x = "x"

for (let number = 1; number <= 7; number = number + 1) {
        console.log(x);
        x = x + "x";
}
