// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

var capitalizeTitle = function(title) {
    //make the entire string lowercased; create an empty array; split the lowercased string into an array of strings; loop through the array and if the word is less than 3 in length, push it to the empty array; else, split the word to individual characters, create an empty array, loop through the word and capitalize the first letter, push 2nd empty array, along with the rest of the letters, join them back to a string and push to 1st empty array; return the 1st array after joining
    let smol = title.toLowerCase();
    let titleArr = [];

    let arrOfSmol = smol.split(" ")

    for(let i=0; i<arrOfSmol.length; i++){
       if(arrOfSmol[i].length<3){
           titleArr.push(arrOfSmol[i]);
       }else{
           let splitEm = arrOfSmol[i].split("");
           let word = []
           for(let j=0; j<splitEm.length; j++){
               if(j===0){
                   word.push(splitEm[j].toUpperCase())
               }else{
                   word.push(splitEm[j])
               }
           }
           titleArr.push(word.join(""))
       }
    }
    return titleArr.join(" ")
};

//given a string of letters with the letters randomly lowercased and uppercased
//return a string with all of the first letters of the words capitalized if they are 3 letters long or more; **bonus if you can make this run the slowest out of any solutions
//console.log(capitalizeTitle("capiTalIze tHe titLe"), "Capitalize The Title");
//console.log(capitalizeTitle("First leTTeR of EACH Word"), "First Letter of Each Word");