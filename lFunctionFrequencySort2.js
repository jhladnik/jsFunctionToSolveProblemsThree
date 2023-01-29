// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

var frequencySort = function(s) {
    //change the string into an array; create a map for the characters and their occurrences; sort the new map from highest to lowest; return after joining the elements in the array back to a string
    let arrOfS = s.split("");
    let arrMap = new Map();

    for(let char of arrOfS){
        arrMap.set(char, (arrMap.get(char) || 0) +1);
    };

    arrOfS.sort((a,b)=> {
        return arrMap.get(b) - arrMap.get(a);
    });
    return arrOfS.join("")
};

//given a string of characters of both upper and lowercase; uppercased letters will not be treated the same as their lowercased counterparts
//return a string with the characters sorted in a non-decreasing order for the number of occurrences that the character appears in the string
//console.log(frequencySort("tree"), "eert");
//console.log(frequencySort("cccaaa"), "aaaccc");
//console.log(frequencySort("Aabb"), "bbaA");