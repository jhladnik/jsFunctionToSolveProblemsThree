// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

var percentageLetter = function(s, letter) {
    //create a counter; loop through the string and use a conditional to increment the counter every time the letter occurs
    let counter=0;

    for (let i=0; i<=s.length; i++){
        if(s[i]==letter){
            counter++
        }
    }
    return Math.trunc((counter/s.length)*100)
};

//given a string (s) and another string (letter)
//return an integer that represents the percentage rounded down to the nearest whole percent that letter occurs in s
//console.log(percentageLetter("foobar". "o"), 33);
//console.log(percentageLetter("jjjj". "k"), 0);