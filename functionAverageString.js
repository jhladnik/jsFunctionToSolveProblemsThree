// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

function averageString(str) {
    //change the string into an array, split by the space
    let spelledArr = str.split(" ");
    //create an object to hold the spelled numbers and there numerical equivalents
    let objNum = {"zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9};
    //map it
    let mappedArr = spelledArr.map(m=>objNum[m]);
    //add the array up and floor it
    let oneNum = Math.floor(mappedArr.reduce((acc,c)=>acc+c,0)/spelledArr.length);
    //set the conditional for the 0-9 or empty string
    if(oneNum<=9 || oneNum>=0){
        return Object.keys(objNum).find(key => objNum[key] === oneNum);
    }else{
      return "n/a"
    }
}

//given a string of spelled numbers from 0-9, or possibly empty or greater than 0-9
//return the average of the spelled numbers, floored, written out as a string again (spelled)
//if the string is empty or above 9, return "n/a"
//input("one three four two"), output("two"); input("nine eight two one"), output("five"); input(""), output("n/a")