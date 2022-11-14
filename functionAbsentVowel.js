// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x){
    //use a conditional to find which vowel is missing
    if(x.includes('a')!= true){
      //return 0 if the string does not include 'a'
      return 0
    }else if(x.includes('e')!= true){
      //return 1 if the string does not include 'e'
      return 1
    }else if(x.includes('i')!= true){
      //return 2 if the string does not include 'i'
      return 2
    }else if(x.includes('o')!= true){
      //return 3 if the string does not include 'o'
      return 3
    }else{
      //if the other vowels are all present, this means 'u' is missing, return 4
      return 4
    }
 }
  
 //given a string of upper and lowercased characters; 'A' has an index of 0; 'E' has an index of 1; 'I' has an index of 2;
 //'O' has an index of 3; and 'U' has an index of 4
 //return the index of the vowel that is missing from the string given; disregard case of the letters
 //input("Ths s a strng for you wth the letter a"), output(2)