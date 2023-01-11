// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

var reverseOnlyLetters = function(s) {
    //reverse just the english letters; loop over the string and if the substring is not an English letter, splice in the symbol, number, etc. into the reversed string that was created already; return the reversed result after joining
    let matched = s.match(/[a-zA-Z]/gi).reverse();
    for (let i = 0; i < s.length; i++) {
        if (!s[i].match(/[a-zA-Z]/)) {
            matched.splice(i, 0, s[i]);
        }
    }
    return matched.join("");
};

//given a string of English letters, numbers, and/or symbols
//return the string with only the English letters reversed, everything else should remain untouched
//console.log(reverseOnlyLetters("ab-cd"), "dc-ba");
//console.log(reverseOnlyLetters("a-bC-dEf-ghIj"), "j-Ih-gfE-dCba");
//console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"), "Qedo1ct-eeLg=ntse-T!");