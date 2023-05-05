var similarPairs = function(words) {
    //turn all of the strings to arrays; create an empty array (unique); loop through the new array; in the loop iteration, create a new Set of the subarray, sort it, change it to a string and push to created array; get unique.length; create a new Set of this array (similar); return unique.length - similar.length+1
    let arrs = words.map(el=>el.split(""));
    let unique = [];

    for(let i=0; i<arrs.length; i++){
        let setItUp = [...new Set(arrs[i])].sort().join("");
        unique.push(setItUp);
    };
    
    let similar = [...new Set(unique)];

    if(similar.length === 1){
        return unique.length
    }else{
        return unique.length - similar.length
    }
};

//given an array of strings; given the definition of "similar strings" being strings that consist of the same substrings only
//return the number of strings in the array that are considered similar
//console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]), 2);
//console.log(similarPairs(["aabb","ab","ba"]), 3);
//console.log(similarPairs(["nba","cba","dba"]), 0);