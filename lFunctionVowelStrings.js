// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

var vowelStrings = function(words, left, right) {
    //create a counter to increment when we find a string that starts with a vowel and ends with a vowel; create a variable for the vowels we are looking for; create a loop from left and ends (inclusive) at right; use a condtional to see if the strings that we are looping through have the conditions we need, increment the counter if they do; return counter
    let vStr = 0;
    let vowels = ['a','e','i','o','u'];

    for(let i=left; i<=right; i++){
        if(vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length-1])){
            vStr++;
        };
    };
    return vStr
};

//given an array of strings (words); given an integer (left) and an integer (right) that create a range
//return an integer that represents the number of strings in the range given that both start with a vowel and end with a vowel
//console.log(vowelStrings(["are", "amy", "u"], 0, 2), 2);
//console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4), 3);