// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

function keysAndValues(data){
    //create an array to hold to be the keymaster
    let keyMaster = Object.keys(data);
    //create an array to be the gatekeeper
    let gateKeeper = Object.values(data);
    //return the results
    return [keyMaster,gateKeeper]
  }
  
  //given an object of keys and values
  //return the keys in one array and return the values in another array
  //input({z: 2, y: 3, t: 7}) output([z, y, t],[2, 3, 7])