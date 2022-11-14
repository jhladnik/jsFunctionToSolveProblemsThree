// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function solve(s){
    let vowel = 0;
    let maxNum = 0;
    for (let i = 0; i < s.length; i++){
       if ("aeiou".includes(s[i])){
          vowel++;
          if (vowel > maxNum){
             maxNum = vowel;
          }
       }else{
          vowel = 0
       }
    }
    return maxNum
}

//given a string of lowercase letters only consisting of consonants and vowels, no spaces
//return the length of the longest vowel substring
//input('oooototi'), output(4);
//input('codewars'), output(1);
//input('sounditout'), output(2)