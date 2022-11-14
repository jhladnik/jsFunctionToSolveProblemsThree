// have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    //create two variables for cat and dog years
    let catYears = 24+(humanYears-2)*4;
    let dogYears = 24+(humanYears-2)*5;
    //create condtional statement for the math that needs to be done and push results into empty array
    if(humanYears>=3){
      return [humanYears,catYears,dogYears]
    }else if(humanYears === 2){
      return [2,24,24]
    }else{
      return [1,15,15]
    }
  }
  
  //given the amount of humanYears is >= 1, catYears = 15 per 1humanYear(first year), +9years = 2nd humanYear, +4years = 3rd and higher humanYears; 15 dogYear = 1humanYear, +9 dogYear = 2nd humanYear, +5 dogYear = 3rd and higher humanYear
  //return array of [humanYears,catYears,dogYears]
  //input(1) output([1,15,15]); input(3) output(3,28,29)