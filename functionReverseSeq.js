//Build a function that returns an array of integers from n to 1 where n>0.

function reverseSeq (n){
    const reversedArr = [];
    for(let i=1;i<=n;i++){
      reversedArr.push(i)
    }
    return reversedArr.reverse()
}