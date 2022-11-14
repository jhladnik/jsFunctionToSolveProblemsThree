// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    //change string to uppercase, create a new Set to see if any duplicates, check against the original length of the string
    return new Set(str.toUpperCase()).size == str.length;
}
  
//given a string of letters in upper or lower case
//return true if the string has no repeating letters, false if it does contain repeating letters; case does not make a difference
//input("joe"), output(true); input("christina"), output(false)
