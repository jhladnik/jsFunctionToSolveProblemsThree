//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    if(x.toLowerCase()===x.toLowerCase().split('').reverse().join('')){
      return true
    }else{
      return false
    }
  }