// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
    //filter the array for integers first; run another filter for strings; sort both in non-decreasing order; concatenate
    //the two arrays and return
    let integers = a.filter(el=>el*1===el);
    let strings = a.filter(str=>str*1!==str);
    
    integers.sort((a,b)=>a-b);
    strings.sort();
    
    return integers.concat(strings);
}

//given an array with elements being integers, integers as strings, and/or strings; the array can contain a mixture
//or it can have just one type of element; integers as strings should be treated as strings
//return an array with the integers preceeding the strings, both sorted in non-decreasing order
//console.log(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
//console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
//console.log(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);