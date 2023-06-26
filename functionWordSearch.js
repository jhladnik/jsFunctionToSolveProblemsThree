// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" 

function wordSearch(query, seq){
    //create a slice of seq; map through changing all to lowercased strings (lowerSeq); create an empty array (arr); loop 
    //through lowerSeq; use a conditional to see if the element includes query, if so, push seq[i] to arr; use a
    //conditional to see if arr is empty, if so return ["Empty"], else return arr
    let cut = seq.slice(0);
    let lowerSeq = cut.map(el=>{
      return el.toLowerCase();
    });
    
    let arr = [];
    
    for(let i=0; i<lowerSeq.length; i++){
      if(lowerSeq[i].includes(query.toLowerCase())){
        arr.push(seq[i]);
      }
    };
    if(arr.length === 0){
      return ["Empty"];
    }else{
      return arr;
    }
}

//given a string (query); given an array of strings (seq); strings can be upper or lowercased and can be mixed
//return an array compiled of strings from seq that contain query; return ["Empty"] if there are 0 strings that
//meet the criteria
//console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
//console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
//console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]);
//console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]);