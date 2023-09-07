// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

var cubeChecker = function(volume, side){
    //check to see if side is <= 0, if so, return false, else, check to see if the side to the power of 3 === volume,
    //return true if yes, else false
    if(side <= 0){
      return false
    }
    return volume === Math.pow(side,3) ? true:false
};

//given an integer (volume) and an integer (side)
//return true if the with the given volume measurement and the given side dimension, we would be dealing with a cube,
//with the formula being side*side*side = volume
//console.log(cubeChecker(-1,2), false);
//console.log(cubeChecker(0,0), false);
//console.log(cubeChecker(8,2), true);