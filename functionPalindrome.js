// A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

// Our goal is to determine whether or not a given string is a valid palindrome or not.

// Notes:

// The empty string "" can be read forward or backward the same, it's a palindrome in our case.

function palindrome(string) {
    //remove all symbols, numbers, and whitespace in the string and make lowercase
    let onlyLetters = string.replace(/[^a-z]/gi,'').trim().toLowerCase();
    //reverse the new string
    let revLetters = onlyLetters.split("").reverse().join("");
    return revLetters===onlyLetters? true:false
}

//given a string containing letters, possibly numbers, whitespace, and symbols
//return true if the string is a palindrome without taking case, whitespace,
//numbers, or symbols into account
//input("Amore, Roma"), output(true);
//input(""), output(true);
//input("bro2 orb"), output(true);
//input("This is a string"), output(false)