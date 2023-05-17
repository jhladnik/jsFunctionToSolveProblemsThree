// You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

// Between each number should be a space and after the final number (n) should be the word 'liftoff!'

function liftoff(instructions){
    //sort the instructions in decending order; change the array to a string joined by spaces; return the new
    //string after concatenating it with the ending " liftoff!"
    instructions.sort((a,b)=>b-a);
    let str = instructions.join(" ");
    return str + " liftoff!"
}

//given an array of integers in no specific order; the integers will be <= 10
//return a string of the integers in descending order and the end of the string should be "liftoff!"
//console.log(liftOff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5]), "10 9 8 7 6 5 4 3 2 1 liftoff!");
//console.log(liftOff([5,3,1,2,4,6,8,7]), "8 7 6 5 4 3 2 1 liftoff!");