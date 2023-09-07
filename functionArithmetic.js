// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
  //use an if statement to return the correct result
  if(operator === "add"){
    return a+b;
  }else if(operator === "subtract"){
    return a-b;
  }else if(operator === "multiply"){
    return a*b;
  }else{
    return a/b;
  }
}

//given two integers (a) and (b); given an operator as a string being one of four actions ("add", "subtract", "multiply", "divide")
//return the result of using the operator as the arithmetic operator between a and b, a always being the first of the problem
//console.log(arithmetic(5,2, "add"), 7);
//console.log(arithmetic(9,3, "subtract"), 6);
//console.log(arithmetic(5,2, "multiply"), 10);
//console.log(arithmetic(9,3, "divide"), 3);