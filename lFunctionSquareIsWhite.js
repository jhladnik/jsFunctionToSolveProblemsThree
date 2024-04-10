// You are given coordinates, a string that represents the coordinates of a square of the chessboard.
// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

var squareIsWhite = function(coordinates) {
   // split the coordinates up into an array
   let arr = coordinates.split("");

   // change the first element of the array to its ascii character
   let letter = arr[0].charCodeAt(0);

   // change the second element in arr to an integer
   let num = Number(arr[1])

   // create a variable for the first square
   let first = ''

   if (letter%2 !== 0) {
       first = 'black'
   } else {
       first = 'white'
   }

   if (first === 'black' && num%2 === 0) {
       return true
   } else if (first === 'white' && num%2 !==0) {
       return true
   } else {
       return false
   }
};

// given a chessboard with letters a-h running horizontally, starting with a being black and alternating black, white, etc; numbers 1-8 running vertically starting at the bottom with black and alternating black, white, etc.; given a string consisting of one letter and one integer as a string combined (coordinates)
// return true if the coordinates would be white, else false
// console.log(squareIsWhite("a1"); false);
// console.log(squareIsWhite("h3"); true);
// console.log(squareIsWhite("c7"); false);