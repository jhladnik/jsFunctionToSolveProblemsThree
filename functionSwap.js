// When provided with a String, capitalize all vowels

// Note: Y is not a vowel 

function swap (string) {
    //create an array that lists the vowels we are looking for (vowels); create an empty string (s); loop through string, use a
    //conditional to see if the substring is in vowels, if so, concatenate the uppercase version of the vowel to the empty
    //string, if not, concatenate the substring to the empty string; return s
    let vowels = ["a","e","i","o","u"];
    let s = "";
    
    for(let i=0; i<string.length; i++){
      if(vowels.indexOf(string[i])!==-1){
        s += string[i].toUpperCase();
      }else{
        s += string[i];
      }
    };
    return s
}
//given a string; given that "y" is not considered a vowel
//return the string with any vowels changed to uppercase
//console.log(swap("  @@@"), "  @@@");
//console.log(swap("HelloWorld!"), "HEllOWOrld!");
//console.log(swap("abracadabra"), "AbrAcAdAbrA");
//console.log(swap("aBRaCaDaBRa"), "ABRACADABRA");
  