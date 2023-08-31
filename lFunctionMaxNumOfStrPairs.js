var maximumNumberOfStringPairs = function(words) {
    // Create a counter for pairs
    let pairs = 0;

    // Helper function to check if two words are reversals of each other
    function areReversals(word1, word2) {
        if (word1.length !== word2.length) {
            return false;
        }

        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[word2.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (areReversals(words[i], words[j])) {
                pairs++;
            }
        }
    }

    return pairs;
};

//given an array (words), full of strings where all of the strings are distinct
//return the number of strings in words that appear in the array in both forwards and reverse sequence
//console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]), 2);
//console.log(maximumNumberOfStringPairs(["ab","ba","cc"]), 1);
//console.log(maximumNumberOfStringPairs(["aa","ab"]), 0);