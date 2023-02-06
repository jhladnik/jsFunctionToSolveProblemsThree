// Your task, is to create N×N multiplication table, of size provided in parameter.

multiplicationTable = function(size) {
    //create an empty array for our table; create a loop counting up to size; nest a second loop to count
    //up to size; populate the empty array using multiplication; return the new array
    let multiPass = [];
    
    for (let i=1; i<=size; i++){
      let row = [];
      for (let j=1; j<=size; j++){
        row.push(i*j)
      }
      multiPass.push(row)
    };
    return multiPass
  }
  
  //given an integer (size);
  //return an array that is representative of a multiplication table of size x size
  //console.log(multiplicationTable(1), [1]);
  //console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
  //console.log(multiplicationTable(0), []);
  