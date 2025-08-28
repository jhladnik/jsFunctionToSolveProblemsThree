// You are given three integers x, y, and z, representing the positions of three people on a number line:

// x is the position of Person 1.
// y is the position of Person 2.
// z is the position of Person 3, who does not move.
// Both Person 1 and Person 2 move toward Person 3 at the same speed.

// Determine which person reaches Person 3 first:

// Return 1 if Person 1 arrives first.
// Return 2 if Person 2 arrives first.
// Return 0 if both arrive at the same time.
// Return the result accordingly.

var findClosest = function(x, y, z) {
    // Find the absolute value of the differences of z to x and z to y
    let diffX = Math.abs(z-x);
    let diffY = Math.abs(z-y);

    // Use a conditional to see which absolute is smaller and return the appropriate integer as specified
    if (diffX < diffY) {
        return 1
    } else if (diffY < diffX) {
        return 2
    } else {
        return 0
    }
};

// Given three integers (x,y,z); given the return of 1 if x arrives first, return of 2 if y arrives first, and return 0 if it is a tie between x and y
// Return 1 if the x integer is closest to z, return 2 if y integer is closest to z, or return 0 if x and y integers are the same distance from z
// console.log(findClosest(2,7,4), 1);
// console.log(findClosest(2,5,6), 2);
// console.log(findClosest(1,5,3), 0);