// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

function modifyMultiply (str,loc,num) {
    //change the string into an array, locate the index of the word needed, and repeat
    //it num times, connecting by a hyphen and returning as a string
    let holder = [];
    let arrOfStr = str.split(' ');
    for (let i=1; i<=num; i++){
      holder.push(arrOfStr[loc]);
      }
    return holder.join('-')
}

//given a string of words and two integers, the first integer being a location of the word in
//the string, and the second integer being the number to multiply by
//return a string with the loc number of the string repeated num times, separated by
//a hyphen
//input('This is a string', 3, 5), output('string-string-string-string-string')