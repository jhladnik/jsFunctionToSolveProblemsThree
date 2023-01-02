// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

var maximum69Number  = function(num) {
    //change the num into an array, then an array of integers; check the sum of the array to see if the sum is less than 36, if it isn't change back to an integer and return it; change the num to a string, replace the first occurence of '6' with '9' and return the the result of turning this string back to an integer
    let arrOfNum = num.toString().split("");
    let numsInArr = arrOfNum.map(el=>parseInt(el));
    let sumOfNum = numsInArr.reduce((acc,c)=>acc+c, 0);
    
    if(sumOfNum==36){
        return parseInt(numsInArr.join(""));
    }else{
        let strNum = num.toString();
        let maxStr = strNum.replace('6','9');
        return parseInt(maxStr)
    }
 };
 
 //given a positive integer that only consists of the numbers 6 and 9
 //return the maximum number that you can get by changing at most, one digit
 //console.log(maximum69Number(9669), 9969);
 //console.log(maximum69Number(9996), 9999);
 //console.log(maximum69Number(9999), 9999);