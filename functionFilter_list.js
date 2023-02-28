// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    //use the Number() constructor to see if a value is undefined; if it isn't, it needs to go in the new array; return
    return l.filter(el=>Number(el)===el)
}

//given an array with the elements being either integers or strings
//return an array without the strings
//console.log(filter_list([1,2,'a','b']), [1,2]);
//console.log(filter_list([1,'a','b',0,15]), [1,0,15]);
//console.log(filter_list([1,2,'aasf','1','123',123]), [1,2,123]);