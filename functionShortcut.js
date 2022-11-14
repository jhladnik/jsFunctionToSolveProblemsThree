//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
    //replace the vowels in the string with nothing
    return string.replace(/[aeiou]/g,'');
  
}
  
  //given (string)
  //return the string given as a string with no vowels, y is not a vowel in this case
  //input('Hello World') output('Hll Wrld'); input('This is my example') output('Ths s my xmpl')