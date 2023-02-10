// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

function digPow(n, p){
    //change n to a string and split it; change the new array elements back to integers; create an empty array to hold
    //some numbers; loop through the new array and push Math.pow(nArr[i], p+i)to the empty array; sum the array; use 
    //a conditional to see if result/n equals 1 or greater, if it does, return that integer, if not...-1
    let nStrs = n.toString().split("");
    let nArr = nStrs.map(el=>{
      return parseInt(el);
    });
    let resultArr = [];
    
    for(let i=0; i<nArr.length; i++){
      resultArr.push(Math.pow(nArr[i], p+i));
    };
    
    let result = resultArr.reduce((acc,c)=>acc+c, 0);
    let divisor = result/n
    if(divisor===Math.floor(divisor) && divisor>=1){
        return divisor
    }
    return -1
}

//given an integer (n) and an integer (p)
//return an integer that is the result of summing the splitting of n to single digits to p power (incrementing)
//for every digit and dividing that sum by n; if there isnt a number that fits this, return -1
//console.log(digPow(89,1), 1);
//console.log(digPow(92,1), -1);
//console.log(digPow(46288,3), 51);