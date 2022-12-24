// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

var sortPeople = function(names, heights) {
    //create a duplicate array of heights with slice; sort heights descending; create an empty array to hold indices numbers; loop through heights pushing the index of the duplicate that corresponds with the sorted number; create another empty array; loop through the ordered indices array; pushing the name that corresponds to the index; return
    let secHeights = heights.slice(0);
    heights.sort((a,b)=>b-a);
    let ordered = [];
    for (let i=0; i<heights.length; i++){
        ordered.push(secHeights.indexOf(heights[i]));
    };
    let namesOrdered = []
    for (let j=0; j<ordered.length; j++){
        namesOrdered.push(names[ordered[j]]);
    };
    return namesOrdered
};

//given two arrays, one of strings (names) and one of integers (heights); the two arrays are corresponding to one another, i.e. names[0] has heights[0], names[1] has heights[1], etc.
//return the array of names in height descending order
//console.log(sortPeople(["Mary","John","Emma"],[180,165,170]), ["Mary","Emma","John"]);
//console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150]), ["Bob","Alice","Bob"]);