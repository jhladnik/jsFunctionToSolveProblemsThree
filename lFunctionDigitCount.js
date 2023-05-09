// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

var digitCount = function(num) {
    //create an array out of the given string; change the individual elements that are strings, into integers; loop through the newly created array; in the iteration of the loop, filter for i and find the length of the filtered array, then use a conditional to see if that length is not equal to the element in the ith location, throw false; return true
    let arrOfNum = num.split("");

    let makeNums = arrOfNum.map(el=>{
        return Number(el);
    });

    for(let i=0; i<makeNums.length; i++){
        let filterLeng = makeNums.filter(em=>em===i).length;
        if(filterLeng!==makeNums[i]){
            return false
        }
    };
    return true
};

//given a string of digits
//return true if all of the index numbers occur num[i] times in the string; return false if they do not
//console.log(digitCount("1210"), true);
//console.log(digitCount("030"), false);