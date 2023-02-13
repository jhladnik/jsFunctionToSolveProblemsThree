// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

var maximumValue = function(strs) {
    //use the map function to see if Number() returns an integer, if it doesn't return str.length; return sorted array's (decreasing value) first element
    let toNums = strs.map(str=>{
        let num = Number(str);
        if(isNaN(num)){
            return str.length;
        }
        return num;
    });
    return toNums.sort((a,b)=>b-a)[0]
};

//given an array of strings; strings can be numbers as strings, characters and numbers as strings combined, etc., if the latter, the string assumes the value of str.length, otherwise the number the string is representing is its value
//return the maximum valued element
//console.log(maximumValue(["alic3","bob","3","4","00000"]), 5);
//console.log(maximumValue(["1","01","001","0001"]), 1);