//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

function solution(a, b){
    //find which string is larger
    if(a.length>b.length){
      //return resulting string of smaller on outside of larger
      return b+a+b
    }else{
      return a+b+a
    }
  }
  
  
  //P = find which string is larger, string a or string b
  //R = return a new string with the smaller of the two strings before and after the larger of the two strings
  //E = input ("333","22") output("2233322"); input("1","66") output("1661")