// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
    //change the string into an array, split at spaces; use loop and reverse the elements; change back to a string
    let revved = [];
    let arrOfS = s.split(" ");
    for (let words of arrOfS){
        let wordRev = words.split("").reverse().join("");
        revved.push(wordRev)
    }
    return revved.join(" ")
};


//given a string of words
//return a string with each word's letters reversed (case sensitive)
//input("Let's take LeetCode contest"), output("s'teL ekat edoCteeL tsetnoc");
//input("God Ding"), output("doG gniD")