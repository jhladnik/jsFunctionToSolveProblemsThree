// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
    //we need to create an empty array to hold the words when decoded
    let decoded = [];
    //create abn array out of the string separating at the spaces
    let arredStr = str.split(" ");
    //create a loop to loop through the array
    for (let i=0; i<arredStr.length; i++){
      //create another empty array to hold the letters of the array when we break them up again
      let words = [];
      //array for the numbers
      let nums = [];
      //create an array to hold all the letters of the word
      let complete = [];
      //notha loop
      for(let letters of arredStr[i]){
          //create a conditional to find the numbers
          if(letters>=0 || letters<=9){
            nums.push(letters);
          }else{
            words.push(letters);
          }
        }
      
        //***number manipulation***
        //get the commas out of the number array and make it a number
        let newNum = Number(nums.join(""));
        //get the ascii code for the number
        let newLetter = String.fromCharCode(newNum);
        //push it to the complete array
        complete.push(newLetter);
      
        //***letter manipulation***
        //conditional to find the 2 letter words
        if(words.length>1){
          //move the letters of the word array around
          let lastLetter = words.slice(words.length-1);
          //push it to the complete array
          complete.push(lastLetter);
          //remove the first letter
          let firstLetter = words.slice(0,1)
          //get the middle section of the word
          let middle = words.splice(1,((words.length-1)-1));
          //make middle into a string
          let strOfMiddle = middle.join("")
          //push middle section to complete
          complete.push(strOfMiddle);
          //push last letter
          complete.push(firstLetter);
          let strWord = complete.join("");
          //push the string word to the decoded array
          decoded.push(strWord)
        }else{
          //concatenate the complete and word arrays
          let twoLetter = complete.concat(words);
          //make the new array a string
          let twoLetStr = twoLetter.join("");
          //push the string to the final arrray
          decoded.push(twoLetStr)
        }
      }
    //join the words together using spaces
    let finalString = decoded.join(" ");
    //return the result
    return finalString
};

//given an encoded string with an ascii number on the front of the word and the last and second
//letters switched; no special characters are used, only letters and spaces
//return the string decoded
//input("72olle 103doo 100ya"), output('Hello good day'); input('82yade 115te 103o'), output('Ready set go')
