// Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

// For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
// Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

var checkZeroOnes = function(s) {
    //create 2 empty arrays, arrZero and arrOne; create two counters, countZero and countOne; loop through the string; increment the counters according to their value, but when the other value occurs, push the count to the appropriate array; return true if a value inside of arrOne is the greatest
    let arrZero = [];
    let arrOne = [];

    let countZero = 0;
    let countOne = 0;

    for(let i=0; i<s.length; i++){
        if(s[i]==="1" && s[i+1]==="0"){
            countOne++;
            arrOne.push(countOne);
        }else if(s[i]==="0" && s[i+1]==="1"){
            countZero++;
            arrZero.push(countZero);
        }else if(s[i]==="1"){
            countOne++;
        }else if(s[i]==="0"){
            countZero++;
        }else if(s[i]==="1" && s[i+1]===undefined){
            countOne++;
            arrOne.push(countOne);
        }else if(s[i]==="0" && s[i+1]===undefined){
            countZero++;
            arrZero.push(countZero);
        }
    };
    arrOne.sort((a,b)=>b-a);
    arrZero.sort((a,b)=>b-a);
    return arrOne[0]>arrZero[0] ? true:false
};

//given a string of 1's and 0's
//return true if a contiguous segment of 1's is greater than the longest contiguous segment of 0's; else false
//console.log(checkZeroOnes("1101"), true);
//console.log(checkZeroOnes("000111"), false);
//console.log(checkZeroOnes("110001101011110"), true);
////console.log(checkZeroOnes(""), false);