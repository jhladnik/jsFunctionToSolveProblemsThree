//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n){
  //sort the array in descending numeric order and return
  return parseInt(n.toString().split('').sort().reverse().join(''))
}

//given an argument of integers that are non-negative
//return the integers in descending order
//input(1111) output(1111); input(123456) output(654321); input(0) output(0)