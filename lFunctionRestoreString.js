// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function(s, indices) {
    let word = [];
    let arrOfS = s.split("");
    for(let j=0; j<arrOfS.length; j++){
        word.push(0)
    }
    for(let i=0; i<indices.length; i++){
       word.splice(i, 1, arrOfS[indices[i]])
    }
    return word.join("")
};

//given a string of shuffled letters and an array of corresponding integers (indices)
//return a string with the letters from the string placed in the correspoding index
//console.log(restoreString("abc", [0,1,2]), "abc");
//console.log(restoreString("eoj", [2,1,0]), "joe");