// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var FilterString = function(value) {
    //split up the value
    let splitsville = value.split("");
    //we gonna need a bigger array
    let purNum = [];
    //whats a looper
    for(let nums of splitsville){
      if(nums>=0 && nums<=9){
        purNum.push(nums)
      }
    }
    //change the array to a string and then a number...return that
    return Number(purNum.join(""))
}
  
//given a string of mixed letters and numbers
//return the numbers, as numbers, in the order they are in the string
//input("ai3jhfi36p3o76"), output(336376); input("0123"), output(0123)