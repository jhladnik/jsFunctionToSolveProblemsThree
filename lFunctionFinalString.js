// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.

// You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.

// Return the final string that will be present on your laptop screen.

var finalString = function(s) {
    //create an empty array to hold our substrings (sHolder); loop through s and if s[i] == "i", set sHolder equal to sHolder reveresed, if s[i] !== "i", push to sHolder; return sHolder after converting from an array of strings to a string
    let sHolder = [];

    for(let i=0; i<=s.length; i++){
        if(s[i] == "i"){
            sHolder = sHolder.reverse();
        }else{
        sHolder.push(s[i]);
        };
    };

    return sHolder.join("")
};

//given a string of letters (s); given the fact that everytime an "i" is present in (s), s reverses
//return a string that would be the result if you were to type s out on a keyboard and "i" reversed the preceeding substrings
//console.log(finalString("string"), "rtsng");
//console.log(finalString("poiinter"), "ponter");
//console.log(finalString("i"), "");