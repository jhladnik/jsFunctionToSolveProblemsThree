// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data ){
    //create an array to hold our outs
    let arrOfResult = [];
    //lets change and reduce
    let result = data.split("").reduce((acc,c)=>{
      //throw in some conditionals to tell what needs to happen
      if(c==="i"){
        acc++;
      }else if(c==="d"){
        acc--;
      }else if(c==="s"){
        acc = Math.pow(acc,2);
      }else if(c==="o"){
        arrOfResult.push(acc)
      }
      return acc
    },0);
    //return the resulting array
    return arrOfResult
}
  
//given a string of lowercase letters; starting at 0; 'i' means to increment the value,
//'d' means to decrement the value, 's' means to square the value, and 'o' should output the value
//return the outputs in an array
//input("iidso"), output([1]); input("iissdo"), output([15])
