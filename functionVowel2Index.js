// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

function vowel2index(str) {
    //use the replace method as well as the offset parameter to return the string with the vowels replaced
      return str.replace(/[aeiou]/gi, (zebs,offset)=> offset+1);
}

//given a string and the vowels a,e,i,o,u
//return the string with the vowels replaced with the index of the vowel
//input('return the string'), output('r2t4rn th10 str15ng')
  