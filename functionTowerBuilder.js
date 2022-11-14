// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors){
    //create an empty array to hold our tower and push to
    let tower = [];
    //create a loop to reach our desired height of floors
      for (let i=0; i<nFloors; i++){
        //push a " " space, repeated nFloors-iterator-1 times, concatenate with "*" repeated (iterator*2)+1 times,
        //concatenate with " " space, repeated nFloors-iterator-1 times
        tower.push(" ".repeat(nFloors - i - 1)+ "*".repeat((i * 2)+ 1)+ " ".repeat(nFloors - i - 1));
      }
    //return our tower array
    return tower
}

//given a positive integer to be representative of a number of floors; the definition of a "tower block" in this case is represented by a "*"
//return a tower of floors as an array of strings made up of tower blocks
//input(3); output(["  *  "," *** ","*****"]); input(1), output(["*"])