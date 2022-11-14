// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    //create an array to be a stack
    let stackOfArr = [];
    //change the string into an array
    let arrOfString = parens.split("");
    //create a loop to iterate through the new array
    for (let i=0; i<parens.length; i++){
      let closure = stackOfArr[stackOfArr.length-1]
      if(arrOfString[i]=='('){
        stackOfArr.push(arrOfString[i]);
      }else if(closure=='(' && arrOfString[i]==')'){
        //remove any closed parentheses
        stackOfArr.pop()
      }else{
        //return false if we don't meet any of these criteria
        return false
      }
    }
    //return if the stack has anything left in it; if it does, there was an invalid set somewhere and is false, if it is empty, this will mean that all the parentheses have been closed and everything is valid
    return stackOfArr.length ? false:true
}
  
//given a string of parentheses, both opening and closing
//return true if the string of parentheses is valid and false if it is not
//input("(((((())))))"), output(true); input("(((((()))))))"), output(false)