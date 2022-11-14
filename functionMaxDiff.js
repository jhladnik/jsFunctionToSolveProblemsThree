// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

function maxDiff(list) {
    //if the list contains less than one integer, return 0; else return largest value - smallest value
    return list.length<1 ? 0:Math.max(...list)-Math.min(...list);
};
  
//given an array either containing integers (positive, 0, or negative), or an empty array
//return the difference of the largest value in the array and the smallest integer in the array; if the array
//is empty, return 0; if the array has an element of only one integer, return 0
//input([1,2,3,4,5,6,7]), output(6); input([]), output(0); input([-1,-1,-1,-1]), output(0)