// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

var splitInParts = function(s, partLength){
    //create an array to push some new arrays into
    let arrOfStr = [];
    //create a loop to loop through the string
    for (let i=0; i<s.length; i+=partLength){
      //push slices of the string of at the partLength
      arrOfStr.push(s.slice(i,i+partLength))
    }
    //
    return arrOfStr.join(" ")
}

//given a string of letters and a numeric length
//return the string cut up into lengths of the numeric length