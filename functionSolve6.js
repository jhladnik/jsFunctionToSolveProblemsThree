// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

function solve(arr){
    //hashmap hashmap hashmap
    let arrMap = new Map();
      for(let el of arr){
          arrMap.set(el, (arrMap.get(el) || 0) + 1);
      };
      return arr.sort((a,b)=> {
          if(arrMap.get(a) === arrMap.get(b)){
              return a-b
          }else{
              return arrMap.get(b) - arrMap.get(a)
          };
      });
}

//given an array of integers
//return an array with the integers sorted in decreasing order by greatness of the frequency they occur; if two of 
//the integers occur the same amount of times, sort them in increasing order
//console.log(solve([2,3,5,3,7,9,5,3,7]), [3,3,3,5,5,7,7,2,9]);
//console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]), [1,1,1,0,0,6,6,8,8,2,3,5,9]);
//console.log(solve([5,9,6,9,6,5,9,9,4,4]), [9,9,9,9,4,4,5,5,6,6]);