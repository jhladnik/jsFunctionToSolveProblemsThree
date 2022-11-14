// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
    //create an object for the results to be held
    const castle = {}
    //change the string in to an array
    let dracula = string.split('');
    //create a loop to iterate over the new array and count the characters
    dracula.forEach(function (x){ castle[x] = (castle[x] || 0)+1});
    //return the object created
    return castle
  }
  
  //given a string of characters
  //return an object with the count of each of the characters of the string; if the string is empty, so should the object returned
  //input('abbabac'), output({a: 3, b: 3, c: 1}); input(''), output({}); input('christina'), output({c: 1, h: 1 , r: 1, i: 2, s: 1, t: 1, n: 1, a: 1})