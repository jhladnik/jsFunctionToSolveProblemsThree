// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed

function dataReverse(data) {
    //create a variable for the size of the chunks we need; create an empty array to hold the chunks;
    //loop through the given array incrementing by the size of the chunk; in the loop, slice the array from i to 
    //i + chunksize; push the new arrays to the empty array; return the array after reversing the elements and
    //flattening the array
    const byteSize = 8;
    let arrOf8 = [];
    for (let i=0; i<data.length; i+=byteSize){
      let byte = data.slice(i, i+byteSize);
      arrOf8.push(byte);
    };
    return arrOf8.reverse().flat()
}

//given an array of 1's and 0's represenative of 8 bit segments; array.length will be a multiple of 8 always
//return an array with the segments reversed in order, not the segments reveresed
//console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]), 
// [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]);
//console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]), [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]);