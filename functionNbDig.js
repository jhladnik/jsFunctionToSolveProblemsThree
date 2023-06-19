// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
  //create an empty array (arr); loop from 0 to and including n; push i*i to arr
  //split up all integers in arr to single integers by using split and join methods (singles); return the length
  //of singles after filtering for d
    
  let arr = [];
  
  for(let i=0; i<=n; i++){
    arr.push(Math.pow(i,2))
  };
  
  let singles = arr.join("").split("");
  
  let targetArr = singles.filter(el=>el==d);
  
  return targetArr.length
}

//given an integer (n) and given an integer (d)
//return the number of times that d occurs in the results of squaring every integer between 0 to n
//console.log(nbDig(5750, 0), 4700);
//console.log(nbDig(11011,2), 9481);
//console.log(nbDig(12224, 8), 7733);