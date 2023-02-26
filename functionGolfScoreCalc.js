// I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

// For example:

// If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
// If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
// Doing all this math by hand is really hard! Can you help make my life easier?

// Task Overview
// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.

function golfScoreCalculator(parList, scoreList){
    //change each parameter to an array of integers; create an empty array; loop through scoreList new array
    //and make the subtraction, push result into empty array; return the sum of the created array
    let arrOfPar = parList.split("");
    let arrOfScore = scoreList.split("");
    
    let numsOfPar = arrOfPar.map(el=> {
      return Number(el)
    });
    let numsOfScore = arrOfScore.map(em=> {
      return Number(em)
    });
    
    let sum = [];
    for(let i=0; i<numsOfScore.length; i++){
      sum.push(numsOfScore[i]-numsOfPar[i])
    };
    return sum.reduce((acc,c)=>acc+c,0)
}

//given two strings; first string is made up of integers as strings (parList); second string is made up
// of integers as strings (scoreList);
//return an integer that is the sum of scoreList-parList
//console.log(golfScoreCalculator('443454444344544443', '353445334534445344'), -1);
//console.log(golfScoreCalculator('123456123456123456', '123456123456123456'), 0);