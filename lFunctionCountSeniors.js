// You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.

var countSeniors = function(details) {
    //create a counter; loop through details; on each iteration, change details[i] to an array (arr), reverse, slice from 2 to 4 (cut), reverse, join without comma, change to integer; use a conditional to find if this is now greater than 60, if so, increment; return counter
    let counter = 0;

    for(let i=0; i<details.length; i++){
        let arr = details[i].split("").reverse();
        let cut = arr.slice(2,4).reverse().join("");
        if(Number(cut)>60){
            counter++;
        }
    };
    return counter
};

//given an array of strings; each string will be 15 characters in length and represent one person; the first 10 characters represent a phone number; the 11th represents the gender of the individual; the next 2 characters represent the age of the individual; the last 2 characters represent the seat assignment;
//return the number of people that are more than 60 years old
//console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]), 2);
//console.log(countSeniors(["1313579440F2036","2921522980M5644"]), 0);