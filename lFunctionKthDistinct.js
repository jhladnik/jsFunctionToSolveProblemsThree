// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

var kthDistinct = function(arr, k) {
    //filter through the array finding the strings that are not duplicated; use a conditional to find if the new array is atleast k in length; if it is not k in length, return and empty string else return the kth-1 element
    let unique = arr.filter(el => arr.indexOf(el)===arr.lastIndexOf(el));

    if(unique.length>=k){
        return unique[k-1];
    }
    return "";
};

//given an array of strings and a parameter (k) which is an integer
//return the kth string that is not duplicated in the array; if there is not k distinct strings in the array, return an empty string
//console.log(kthDistinct(["d","b","c","b","c","a"], 2), "a");
//console.log(kthDistinct(["aaa","aa","a"], 1), "aaa");
//console.log(kthDistinct(["a","b","a"], 3), "");