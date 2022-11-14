// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    //find the lowest age/number in the array
    let youngest = Math.min(...ages);
    //find the highest age/number in the array
    let oldest = Math.max(...ages);
    //find the difference of the oldest and the youngest
    let difference = oldest-youngest;
    //create the array that we need to return
    let resultData = [youngest, oldest, difference];
    return resultData
 }
  
 //given an array of numbers that are to be the ages of people in a family; all numbers will be whole numbers
 //return an array with the the following in this order: youngest age, oldest age, difference between the youngest and the oldest age
 //input([0,3,6,34,23]), output([0,34,34]); input([12,12,24,16,32]), output([12,32,20])