// Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]

var runLengthEncoding = function(str){
    //make the string an array
    let arrOfStr = str.split('')
    //create an array to hold the end values
    let end = [];
    let counter = 1
    //create a loop to iterate over the string
    for(let i=0; i<arrOfStr.length; i++){
      //conditiona is betta, i make the hair silky and smooth
      if(arrOfStr[i]==arrOfStr[i+1]){
        counter=counter+1
      }else{
        end.push([counter,arrOfStr[i]]);
        counter=1
      }
    }
    return end
}

//given a string of letters, case is not an issue
//return an array containing arrays of the amount and letter as two separate
//elements; if the letter repeats consecutively, it should only be represented once
//and the amount should increase
//input('lets try this'), output([1,l],[1,'e'],[1,'t'],[1,'s'],[1,' '],[1,'t'],[1,'r'],[1,'y'],[1,' '],
//[1,'t'],[1,'h'],[1,'i'],[1,'s'])