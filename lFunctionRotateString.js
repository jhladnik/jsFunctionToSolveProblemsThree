// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

var rotateString = function(s, goal) {
    //make s into an array; create a duplicate of the array; loop through orginal array and add every element to the copied array; change the new copied array to a string; use conditional to see if goal is in the new double string, return true if it is, else false
    let sArr = s.split("");
    let sTimesTwo = sArr.slice(0);
    if(goal.length===s.length){
        for(let i=0; i<sArr.length; i++){
            sTimesTwo.push(sArr[i]);
        };
        let sTimesTwoStr = sTimesTwo.join("");
        if(sTimesTwoStr.includes(goal)){
            return true;
        };
    };
    return false;
};

//given two strings (s, goal)
//return true if by rotating the original string, goal can be achieved; return false if goal cannot be achieved by rotating the original string
//console.log(rotateString("abcde", "cdeab"), true);
//console.log(rotateString("abcde", "abced"), false);