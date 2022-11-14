// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorter_reverse_longer(a,b){
    //lets create two reversed strings
    let c = a.split("").reverse().join("");
    let d = b.split("").reverse().join("");
    //create a conditional to find the smallest of the two strings
    if(a.length<b.length){
      return a+d+a
    }else{
      return b+c+b
    }
}

//given two strings, both of varying sizes including empty
//return a string in the form of "shortestString+longerString(reversed)+shortestString; if the strings are the same size,
//treat string "a" as the longer of the strings
//input("abc","gfed"), output("abcdefgabc"); input("abc","def"), output("defcbadef"); input('abcd',''), output(' dcba ')