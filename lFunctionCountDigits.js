// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

var countDigits = function(num) {
    //split num into an array of single integers; create a counter; loop over the new array, use a conditional to see if num is divisible by the element, if it is, increment counter; return counter
    let indy = num.toString().split("");
    let newNums = indy.map(el=>{
        return parseInt(el)
    });
    let counter = 0;
    for(let i=0; i<newNums.length; i++){
        if(num%newNums[i]===0){
            counter++
        }
    }
    return counter
};

//given an integer(num)
//return the amount of integers that make up num in which num can be divided by
//console.log(countDigits(7), 1);
//console.log(countDigits(121), 2);
//console.log(countDigits(1248), 4);