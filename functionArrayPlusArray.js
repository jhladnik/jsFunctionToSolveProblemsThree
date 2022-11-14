// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    //find the sum of the first array
    let sumArr1 = arr1.reduce((acc,c)=>acc+c,0);
    //find the sum of the second array
    let sumArr2 = arr2.reduce((acc,c)=>acc+c,0);
    //find the sum of the two array sums we have already found
    return sumArr1+sumArr2
}
  
//given two arrays of integers
//return the sum of the sums of the arrays
//input([1,2,3],[1,2,3]), output(12); input([-1,-1,-1],[-2,-2,-2]), output(-9)

