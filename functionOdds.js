// Time to test your basic knowledge in functions! Return the odds from a list

function odds(values){
    // arrow it
    return values.filter(el=>el%2!=0);
}

//given an array of values and an arrow function
//return all odd values out of the array by filling in the missing components in
//the arrow function
//input([1,2,3,4,5]), output([1,3,5]);
//input([2,4,6]), output([])