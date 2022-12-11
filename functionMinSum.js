// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    // sort the array, smallest to largest and largest to smallest; multiply the first input by last, second by second to last, etc;
    //push all products to an empty array; reduce the products; return sum
    let smallest = arr.sort((a,b)=>a-b);
    let smallestArr = []
    for (let i=0; i<(smallest.length/2); i++){
      smallestArr.push(smallest[i]);
    }
    let largest = arr.sort((a,b)=>b-a);
    let largestArr = [];
    for (let j=0; j<(largest.length/2); j++){
      largestArr.push(largest[j]);
    }
    let products = [];
    for (let k=0; k<largestArr.length; k++){
      products.push(smallestArr[k]*largestArr[k]);
    }
    return products.reduce((acc,c)=>acc+c,0)
}

//given an array of integers; all integers will be positive; all arrays will be even in length
//return an integer; the integer will be the minimum sum which is found from summing two integers in the array
//console.log(minSum([5,4,2,3]), 22);
//console.log(minSum([12,6,10,26,3,24]), 342);
//console.log(minSum([9,2,8,7,5,4,0,6]), 74);