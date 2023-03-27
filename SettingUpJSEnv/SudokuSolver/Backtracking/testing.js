/*

const Testboard = [["3", "5"],
                   ["0", "7"]];

// console.log(Testboard.length());

// const myArray = ['Horses', 'Dogs', 'Cats'];

var newArray = []; 


//create an array that stores the values and their position

//we'll need to loop through the original array and use the push function to store the values

//the i and j will show the array position and the values will be represented by Testboard[i][j]
for (let i = 0; i < Testboard.length; i++) {
    for (let j = 0; j < Testboard.length; j++) {
        //format should be value, co-ordinates.
        let dataPoint = (Testboard[i][j] + (i.toString()) + (j.toString())).toString();
        console.log(dataPoint);
        newArray.push(dataPoint); 
        /*
        300
        501
        010
        711
        */

        /*

console.log("new array length: " + newArray.length)

for (let j = 0; j < newArray.length; j++) {
    console.log(parseInt(newArray[0][j], 10));
}


console.log(newArray);

*/

/*

var obj = { one: 1, two: 2, three: 3 }

var arr = Object.keys(obj);

console.log(arr);


*/
                    //00                    01        
var testArray = [{ row: 0, col: 0 }, { row: 1, col: 1 }];
                 
// var arrayCopy = [testArray];

var arrayCopy = [];
testArray = [arrayCopy];

console.log(testArray);
