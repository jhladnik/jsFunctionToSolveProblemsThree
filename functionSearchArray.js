// JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

// However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6]];
// var query = [1,2]; // => 0
// query = [5,6]; // => 2
// query = [9,2]; // => -1
// You will be required to validate the inputs on the following criteria:

// each element of the array to be searched should be an array;
// each sub-array in the two-dimensional array should be of length two; and
// query should be an array of length two.
// If the inputs are not valid you should throw an Error.

// See some examples:

// var arrayToSearch = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// var query = [1,2]; // => valid input
// query = 5; // => throw Error
// query = [9,2,1]; // => throw Error

var searchArray = function (arrayToSearch, query) {
    //check the query to see if the criteria match, if not return "Error"; if they do, flatten the array, 
    //check length to be even, if not throw "Error"; if so, loop through the array; use a conditional to check length of the element;
    //use another condtional in the array to check the first element in the subarray, if it matches, check second element;
    //if it matches, return i; else -1
    if (query.length!==2 || Array.isArray(query)==false){
      return error;
    }
    
    let noSubs = arrayToSearch.flat();
    if (noSubs.length%2!==0){
      return error;
    }
    
    for (let i=0; i<arrayToSearch.length; i++){
      if (arrayToSearch[i].length!==2){
        return error;
      }else{
        if(arrayToSearch[i][0]===query[0]){
          if(arrayToSearch[i][1]===query[1]){
            return i;
          }
        }
      };
    };
    return -1
}
  
  //given an array (arrayToSearch) of subarrays (2D) containing integers, each sub should be length of 2; also
  //given another array (query) that should be a length of 2 and containing integers
  //return the index that the query occupies in arrayToSearch; if query does not exist, return -1; if subarrays
  //in arrayToSearch do not have a length of 2, throw an error; if the query is not an array or does not have a
  //length of 2, throw an error
  //console.log(searchArray([[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]], [9,20]), 2);
  //console.log(searchArray([[1,2],[3,4],[5,6]], [1,2]), 0);
  //console.log(searchArray([[1,2],[3,4],[5,6]], [9,20]), -1);
  //console.log(searchArray([[1,2],[3,4],[5,6],[7,8,9]], 5), "Error")