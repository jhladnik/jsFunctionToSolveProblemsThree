// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.

function well(x){
    //create a counter (counter); loop through x; nest a loop through each element; use a conditional to see if the subelement is
    //==='good', if so increment counter; outside of loops, use a conditional to what the counter is at and what to return
    
    let counter = 0;
    
    for(let i=0; i<x.length; i++){
      for(let j=0; j<x[i].length; j++){
        if(x[i][j].toString().toLowerCase() === 'good'){
          counter++;
        }
      };
    };
    
    if(counter > 2){
      return 'I smell a series!';
    }else if(counter>0){
      return 'Publish!';
    }else{
      return 'Fail!';
    };
}

//given a two dimensional array; 'good'/'Good'/'GOOD'/'gOOd', no matter what the case of the strings represent the same, 
//as the same with 'bad'; not all inputs will be strings
//return 'Fail!' if there are no 'good' in the matrix; return 'Publish!' if there are 1-2 'good' in the matrix; return
//'I smell a series!' if there are greater than 2 'good' in the matrix
//console.log(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
//console.log(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
//console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');