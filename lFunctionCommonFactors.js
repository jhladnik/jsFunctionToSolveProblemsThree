// Given two positive integers a and b, return the number of common factors of a and b.

// An integer x is a common factor of a and b if x divides both a and b.

var commonFactors = function(a, b) {
    //create a counter; find the parameter that has the lowest value; loop from 1 to the lowest value; use a conditional to see which integers are factors of a and b; if they are both, increment the counter; return the counter
    let facts = 0;
    let low = Math.min(a,b);

    for(let i=1; i<=low; i++){
        if(a%i===0 && b%i===0){
            facts++;
        };
    };
    return facts
};

//given 2 integers (a) and (b)
//return the amount of common factors between a and b
//console.log(commonFactors(12,6), 4);
//console.log(commonFactors(25,30), 2);