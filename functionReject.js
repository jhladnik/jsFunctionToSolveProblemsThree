// Implement a function which filters out array values which satisfy the given predicate.

function reject(array, predicate) {
    //return using the filter method
    return array.filter(el=>!predicate(el))
}

//given an array of integers (array) and a specific condition (predicate)
//return an array that filters out all of the integers that don't obide by the predicate
//console.log(reject([1,2,3,4,5,6], function(num){return num %2 == 0;}), [1,3,5])