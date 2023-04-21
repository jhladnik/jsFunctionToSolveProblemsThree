// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.

var largestGoodInteger = function(num) {
    //create an empty array; change the string to an array and from digits as strings to integers; loop through the new array and use a conditional to see if i === i+1 && i === i+2, if so, push to the array; use a condtional to see if there is anything in the array, if so, find the largest integer in the array; change to a string and use repeat method, return this, else return ""
    let repInt = [];
    let arrOfNum = num.split("");
    let arrOfInt = arrOfNum.map(el=>{
        return Number(el);
    });

    for(let i=0; i<arrOfInt.length; i++){
        if(arrOfInt[i]===arrOfInt[i+1] && arrOfInt[i]===arrOfInt[i+2]){
            repInt.push(arrOfInt[i])
        };
    };

    if (repInt.length>0){
        let largest = Math.max(...repInt);
        let strOfLargest = largest.toString();
        return strOfLargest.repeat(3);
    }
    return ""
};

//given a string of digits; given the definition of a good integer being it is a substring of the given string with a length of 3 and it consists of only one digit
//return the maximum good integer in string form
//console.log(largestGoodInteger("6777133339"), "777");
//console.log(largestGoodInteger("2300019"), "000");
//console.log(largestGoodInteger("42352338"), "");
Console
