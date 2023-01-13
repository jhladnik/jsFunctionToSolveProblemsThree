// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

var removeDigit = function(number, digit) {
    let maxNumber = -Infinity;
    let index = 0;

    while (index < number.length) {
        if (number[index] === digit) {
            let newNumber = number.substring(0, index) + number.substring(index + 1);
            if (newNumber > maxNumber) {
            maxNumber = newNumber;
            }
        }
        index++;
    }
    return maxNumber;
};

//given a stringed number and a digit that is also represented by a string
//return the maximum value (in string form) that can be made by removing one instance of the digit
//console.log(removeDigit("123", "3"), "12");
//console.log(removeDigit("1231", "1"), "231");
//console.log(removeDigit("551", "5"), "51");