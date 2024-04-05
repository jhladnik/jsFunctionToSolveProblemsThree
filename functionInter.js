function printVertically(s){
    let arrOfS = s.split(" ");
    let largest = Math.max(...arrOfS.map(word => word.length));
    let result = [];
 
    for (let i=0; i<largest; i++) {
         let a = '';
         
         for (let word of arrOfS) {
            // add the next character to the string or ' ' if it doesn't exist
             a += word[i] || ' ';
         }
         result.push(a.trimEnd());
    }
    return result;
 };
 
 
 /**
 CONTEST 
 IS
 COMING
 
  */

//  given a string of strings
// return an array of strings consisting of the ith substring of each string in the array, joined without any trailing spaces on the last
// console.log(printVertically("CONTEST IS COMING"), ["CIC", "OSO", "N M", "T I", "E N", "S G", "T"]);
