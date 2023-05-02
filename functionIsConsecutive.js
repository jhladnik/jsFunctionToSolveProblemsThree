// In this kata you have to find whether same elements of the string are grouped together.

const isConsecutive = (str) => {
    //create an empty array; loop through the str; use a conditional to see if i !== i-1, if it is push to the
    //array; create a new Set of the created array; if the length of the Set and the created array are the same
    //return true, else false
    
    let segments = [];
    
    for(let i=0; i<=str.length; i++){
      if(str[i] !== str[i-1]){
        segments.push(str[i]);
      };
    };
    
    let unique = [...new Set(segments)].length;
    
    return segments.length === unique ? true:false
}

//given a string of integers
//return true if all of the stringed integers are grouped together; else false
//console.log(isConsecutive("112233"), true);
//console.log(isConsecutive("11223311"), false);