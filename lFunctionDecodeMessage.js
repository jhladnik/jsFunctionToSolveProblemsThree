// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

var decodeMessage = function(key, message) {
    //remove all spaces in the key; create an array of it; use Set to remove any duplicate elements; use the ascii decimals to link up with the key, then replace message letters with the appropriate ascii code changed to the character it represents
    let noSpaceArr = key.replace(/[ ]/g,"").split("");
    let noDupes = [...new Set(noSpaceArr)];
    let decode = message.split("").map(el=> String.fromCharCode(noDupes.indexOf(el)+97));
    return decode.join("").replace(/[`]/g," ")
};

//given two strings, the key which will be paired up with the english alphabet (lowercase a-z), and the message which will need to be decoded
//return the decoded string that uses the key in string form
//console.log(decodeMessage("the quick brown fox jumps over the lazy dog","vkbs bs t suepuv"), "this is a secret");
//console.log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo","zwx hnfx lqantp mnoeius ycgk vcnjrdb"), "the five boxing wizards jump quickly");