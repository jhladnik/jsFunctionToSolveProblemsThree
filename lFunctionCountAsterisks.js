// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

// Return the number of '*' in s, excluding the '*' between each pair of '|'.

// Note that each '|' will belong to exactly one pair.

var countAsterisks = function(s) {
    //set a counter for bars (bars) to increment when coming across a "|"; set a counter for asterisks (aRisks), to increment under conditions; loop through the string; if a bar is come across, increment bars; if bars%2===0, increment aRisks; return aRisks 
    let bars = 0;
    let aRisks = 0;

    for(let i=0; i<s.length; i++){
        if(s[i]==="|"){
            bars++;
        }else if(bars%2===0 && s[i]==="*"){
            aRisks++;
        };
    };
    return aRisks
};

//given a string that can contain vertical bars (|); each set of 2 | are considered a pair
//return the number of *, excluding the * in between the pairs
//console.log(countAsterisks("l|*e*et|c**o|*de|"), 2);
//console.log(countAsterisks("iamprogrammer"), 0);
//console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"), 5);