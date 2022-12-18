// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

var sortSentence = function(s) {
    //split the string into an array; reverse each element and sort (first character in the string will now be the num);replace nums, and reverse each string; join with a space
    let arrOfS = s.split(" ");
    let reversed = arrOfS.map(el=>el.split("").reverse().join(""));
    let inOrder = reversed.sort();
    let noNums = inOrder.map(em=>em.replace(/[0-9]/g,"").split("").reverse().join(""));
    return noNums.join(" ")
};

//given a string that has been shuffled; each substring has had the integer of it's place in the original string added to the end;each string will not contain more than 9 substrings
//return the string in order without the ending integers on the substrings
//console.log(sortSentence("is2 sentence4 This1 a3"), "This is a sentence");
//console.log(sortSentence("Myself2 Me1 I4 and3"), "Me Myself and I");