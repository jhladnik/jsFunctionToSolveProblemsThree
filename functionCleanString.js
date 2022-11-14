// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }
  //given a string of letters and octothorps in which the octothorps mean to backspace
  //return the string without the octothorps and following the backspaces
  //input("abcd#e#f"), output("abcf"); input("uss#et#rn#nap#w#mq#x#e"), output("username")