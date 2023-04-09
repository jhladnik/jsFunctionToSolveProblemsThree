// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

var countConsistentStrings = function(allowed, words) {
    //create a counter; loop through words; create another counter (counter); loop through each element and use a condtional to see if allowed has the index of the character at j, if it doesn't, counter++; if counter has a value greater than 0 after every iteration of the first loop, increment the first counter; return the difference of the words array and the first counter
    let nonSubs = 0;

    for(let i=0; i<words.length; i++){
        let counter = 0;
        for(let j=0; j<words[i].length; j++){
            if(allowed.indexOf(words[i].charAt(j)) === -1){
                counter++;
            };
        };
        if(counter>0){
            nonSubs++;
        };
    };
    return words.length-nonSubs
};

//given a string of "allowed" letters and an array of strings
//return the number of strings that contain only the "allowed" letters
//console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]), 2);
//console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]), 7);
//console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]), 4);