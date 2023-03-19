// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:
// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:
// Number of files that can be fully saved in the HD.

function save(sizes, hd) {
    //create an empty array; loop through the given array and push the element into the created array
    //on every interation, sum the created array and test against hd using a conditional; if it is
    //greater, return i since the integer before will be the last that has fit; else return the length
    //of the given array
    let sumIt = [];
    
    for(let i=0; i<sizes.length; i++){
      sumIt.push(sizes[i]);
      let summed = sumIt.reduce((acc,c)=>acc+c,0);
      if(summed>hd){
        return i;
      }
    };
    return sizes.length;
};

//given an array of integers and an integer that is considered the upper limit
//return the number of elements that can fit into the limit
//console.log(save([4,4,4,3,3],12), 3);
//console.log(save([100,100],500), 2);
//console.log(save([4,4,4,3,3],11), 2);