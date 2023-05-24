// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names

function findOddNames(list) {
    //create an empty array to return; loop through the list; for each object/element, split to an array, create a variable
    //for the sum, loop through the element array, on each iteration, add the ASCII value to the sum; use a conditional
    //to see if the sum is even or odd, if odd push to empty array; return the empty array
    let odds = [];
    
    for(let i=0; i<list.length; i++){
      let arr = list[i].firstName.split("");
      let sum = 0;
      for(let j=0; j<arr.length; j++){
        let num = arr[j].charCodeAt(0);
        sum+=num;
      };
      if(sum%2!==0){
        odds.push(list[i]);
      }
    }
    return odds
}

//given an array of objects containing key value pairs of varying information
//return an array of objects that only consist of the objects from the given array that have a firstName value that is
//odd when the ASCII values of the firstName value are summed
//console.log(findOddNames([
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]), [{ firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }]);
//console.log(findOddNames([
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
// ]), []);