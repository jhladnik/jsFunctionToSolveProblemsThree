// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

var countWords = function(words1, words2) {
    //create an empty array to hold strings that are not duplicated; loop over the first array and find if the indexOf is same as lastIndexOf, push to empty array if true; do the same for the second array; create a third empty array and run a loop over emptyArray1, nest a loop running over emptyArray2, then use a conditional to see if emptyArray1[value] is equal to emptyArray2[val], if it is, push to empty array 3 and return the length of that array
    let origWords1 = [];
    for(let i=0; i<words1.length; i++){
        if(words1.indexOf(words1[i])==words1.lastIndexOf(words1[i])){
            origWords1.push(words1[i]);
        };
    };

    let origWords2 = [];
    for(let j=0; j<words2.length; j++){
        if(words2.indexOf(words2[j])==words2.lastIndexOf(words2[j])){
            origWords2.push(words2[j]);
        };
    };

    let inCommon = [];
    for(let k=0; k<origWords1.length; k++){
        for(let m=0; m<origWords2.length; m++){
            if(origWords1[k]===origWords2[m]){
                inCommon.push(origWords1[k]);
            };
        };
    };
    return inCommon.length;
};

//given two separate arrays containing strings
//return the number of strings that occur exactly one time in each array
//console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]), 2);
//console.log(countWords(["b","bb","bbb"], ["a","aa","aaa"]), 0);
//console.log(countWords(["a","ab"], ["a","a","a","ab"]), 1);