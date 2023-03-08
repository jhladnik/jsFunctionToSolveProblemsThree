// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

var balancedStringSplit = function(s) {
    //create a counter to increment the verifications; create another value to increment when a balanced string is verified; loop over the given string; assign "L" -1 and assign "R" 1; use a conditional to see when we get the total to 0, when the total is zero, we have a balanced string; return the balanced string count
    let balanced = 0;

    let total = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="R"){
            total++;
        }else if(s[i]==="L"){
            total--;
        }

        if(total===0){
            balanced++
        }
    };
    return balanced
};

//given a string of a combination of "L" and "R"; a balanced string is a string that contains the same amount of "L" and "R"
//return an integer; it should represent the maximimum number of balanced strings that can be cut from the given string
//console.log(balancedStringSplit("RLRRLLRLRL"), 4);
//console.log(balancedStringSplit("RLRRRLLRLL"), 2);
//console.log(balancedStringSplit("LLLLRRRR"), 1);