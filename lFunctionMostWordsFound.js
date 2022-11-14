// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

var mostWordsFound = function(sentences) {
    //find length of the sentences by splitting the elements up by spaces, push to a new
    //array and find the largest number of that array
    let amount = [];
    for(let i=0; i<sentences.length; i++){
        amount.push(sentences[i].split(" ").length)
    }
    return Math.max(...amount)
};

//given an array of strings containing words
//return the largest number of words in the elements given
//input(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]), output(6);
//input(["please wait", "continue to fight", "continue to win"]), output(3)