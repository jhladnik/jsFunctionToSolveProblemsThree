// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

function solve(s){
    //lets try replacing the letters with spaces
    let noLet = s.replace(/[a-z]/g, " ");
    //change the stringed nums to an array and actual integers
    let arrOfS = noLet.split(" ");
    //change to integerw
    let nums = arrOfS.map(el=>Number(el));
    //sort the new array backwards
    let decrease = nums.sort((a,b)=>b-a);
    //return the first element
    return decrease[0]
};

//given a string with lowercase letters and numbers; numbers will not have leading zeros
//return the largest valued number (grouping)
//input('2ti9iei7qhr5'), output(9); input('f7g42g16hcu5'), output(42); input('lu1j8qbbb85'), output(85)