// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

var relativeSortArray = function(arr1, arr2) {
    //sort arr1 in ascending order; create an empty array; loop through arr2 and nest a loop through the sorted arr1 and see if arr2[i] is equal to arr1[j], if it is, push to the empty array; use a filter on arr1 to see if the integers exist in arr2; concat original empty array and filtered array
    arr1.sort((a,b)=>a-b);
    let ordArr1 = [];

    for(let i=0; i<arr2.length; i++){
        for(let j=0; j<arr1.length; j++){
            if(arr2[i]===arr1[j]){
                ordArr1.push(arr1[j])
            }
        };
    };
    let outliers = arr1.filter(el=>arr2.indexOf(el)==-1);
    return ordArr1.concat(outliers)
};

//given two arrays of integers (arr1, arr2); arr2 will have all integers that exist in arr1, but the contrary is not true
//return an array of all of the integers in arr1 so that they are in the order that arr2 presents; any integers that are not in arr2 should be placed at the end of the new array in ascending order
//console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]), [2,2,2,1,4,3,3,9,6,7,19]);
//console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6]), [22,28,8,6,17,44]);