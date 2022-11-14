// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
    //replace the word plus with a '+', and replace the word minus with a '-'
    let strRep = str.replace(/plus/gi,"+").replace(/minus/gi,'-');
    //return the problem's solution after changing it to a string
    return eval(strRep).toString()
 }
  
 //given a string with both numbers and letters; the letters will spell out "minus" or "plus"; where those two
 //words are spelt out, the specific action needs to be taken
 //return the value in string form that the addition/subtraction problem comes to
 //input('0plus2plus7minus8'), output('1'); input('0minus12plus6plus5'), output('-1')