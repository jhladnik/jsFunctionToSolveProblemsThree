// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value){
    //change the value to a string and use padStart method
    return `Value is ${String(value).padStart(5,"0")}`
}

//given a value; and the length of 5 for the ending result number(stringed); also given the
//string "Value is VALUE"
//return the padded value to 5 digits, leading with 0's
//input(12), output("Value is 00012"); input(0), output("Value is 00000"); input(1234), output("Value is 01234")