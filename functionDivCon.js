// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

function divCon(x){
    //filter out the strings
    let strFlt = x.filter(el=>typeof el==='string');
    //change the strings into their own integers and get sum
    let strToInt = strFlt.map(Number).reduce((acc,c)=>acc+c,0)
    //filter out the integers
    let intFlt = x.filter(ez=>typeof ez==='number');
    //get sum of the new array of integers
    let sumOfInt = intFlt.reduce((acc,c)=>acc+c,0)
    //return the difference of integers from the stringed integers
    return (sumOfInt-strToInt)
}
  
//given a mixed array of number and string representations of integers
//return the difference from when the string integers are added up and subtracted from the sum of the non-string integers
//input(['1',3,'2',7]), output(7); input(['3','8',4,4,20]), output(17)