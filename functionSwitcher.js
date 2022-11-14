// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x){
    //create an empty array
    let arrForStr = [];
    //lets get all of the letters populated and reversed
    let letterArr = [...Array(26)].map((_, i) => String.fromCharCode(i + 97)).reverse();
    //change the array to numbers from strings
    letterArr.push('!');
    letterArr.push('?');
    letterArr.push("\ ");
    let numArr = x.map(el=>parseInt(el));
    //create a loop
    for(let nums of numArr){
      //push the corresponding letters from letterArr
      arrForStr.push(letterArr[nums-1])
    }
    //return the array after joining it and making it back into a string
    return arrForStr.join("")
}

//given an array of stringified numbers; a=26, b=25....z=1; '!'=27, '?'=28, ' '=29
//return a string that is decoded
//input(['26','25',' ','24','27']), output('ab c!'); input(['29','29','29']), output('   ')