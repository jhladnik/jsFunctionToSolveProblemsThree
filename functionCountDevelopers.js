// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

function countDevelopers(list) {
    //create a variable to count the developers that meet the criteria we are going to lay out
    let num = 0;
    //loop through the array of objects
    for (let i=0; i<list.length; i++){
      //lay down the criteria that we need to meet
      if(list[i].continent=='Europe' && list[i].language=='JavaScript'){
        //if the object meets the criteria, add one to the variable
        num++
      }
    }
    //return the variable
    return num
 }
  
 //given an array of objects with multiple descriptions of developers (people), including the continents that they are from
 //return the number of developers that are from Europe and are JavaScript developers; if there are no developers that
 //meet this criteria, return 0