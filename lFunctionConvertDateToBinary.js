// You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

// date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

// Return the binary representation of date.

var convertDateToBinary = function(date) {
    // Change the string date representation to an array of strings splitting at the '-'
    let strArr = date.split('-');

    // Initialize a holder array for the binary
    let bye = [];

    // Loop through strArr and convert each element to an integer then to binary and push to bye
    for (let i=0; i<strArr.length; i++) {
        let chg = Number(strArr[i]).toString(2);
        bye.push(chg)
    }

    // Convert bye to a string, joining by the '-' and return
    let byeStr = bye.join('-');

    return byeStr
};

// Given a date represented by a string in the format "yyyy-mm-dd"
// Return a string with the individual integer groups changed to binary
// console.log(convertDateToBinary("2080-02-29"), "100000100000-10-11101");
// console.log(convertDateToBinary("1900-01-01"), "11101101100-1-1");