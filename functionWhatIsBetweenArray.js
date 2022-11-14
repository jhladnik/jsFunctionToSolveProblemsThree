//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them

function between(a, b) {
    const whatIsBetween = [];
    for(let i=a; i<b+1; i++){
      whatIsBetween.push(i)
    }
    return whatIsBetween
}