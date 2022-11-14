// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

function minValue(values){
    //create a new array to hold the smallest number
    let arrHolder = [];
    //using Set, lets remove all the duplicates of the given array
    let uniqueVal = [...new Set(values)];
    //sort the new array
    uniqueVal.sort();
    //return the array after it has been joined and make sure it is a number still
    return Number(uniqueVal.join(""))
}
  
//given an array of integers greater than 0
//return the smallest possible number using only each integer once
//input([1,1,3,6]), output(136); input([4,6,4,7,8,3]), output(34678)