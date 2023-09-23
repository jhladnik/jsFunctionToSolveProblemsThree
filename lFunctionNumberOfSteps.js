// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

var numberOfSteps = function(num) {
    //create a counter; use a while statement to iterate through num until num === 0; increment counter on every loop; return counter when num === 0
    let counter = 0;
    
    while (num > 0) {
        if (num%2 === 0){
            num /= 2;
            counter++
        } else {
            num -= 1;
            counter++;
        };
    };
    return counter
};

//given an integer (num); given the rule that num can be divided by 2 if it is even and 1 can be subtracted from num if it is odd
//return an integer which represents the number of steps to get num to 0
//console.log(numberOfSteps(14), 6);
//console.log(numberOfSteps(8), 4);
//console.log(numberOfSteps(0), 0);