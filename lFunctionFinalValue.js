// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

var finalValueAfterOperations = function(operations) {
    //set a counter up, loop through the operations and use a conditional to see if we need to add or subtract
    //from the counter, return the counter
    let counter = 0;
    for(let i=0; i<operations.length; i++){
        if(operations[i]=="++X" || operations[i]=="X++"){
            counter += 1
        }else{
            counter -= 1
        }
    }
    return counter
};

//given an array of operations where the following are true and X starts as 0: "++X"= +1; "X++"= +1; "--X"= -1; "X--"= -1
//return the final value after running through the array of operations
//input(["--X","X++","X++"]), output(1);
//input(["++X","++X","X++"]), output(3);