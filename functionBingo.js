// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win){
    //create a counter; loop through the ticket array, find if the ASCII code changed into its character is
    //contained in the corresponding string, if it is, add 1 to the counter; check to see if counter is >= the win
    //integer and return the appropriate string
    let miniwins = 0
    
    for(let i=0; i<ticket.length; i++){
      if(ticket[i][0].includes(String.fromCharCode(ticket[i][1]))){
        miniwins++
      }
    }
    return win>miniwins ? 'Loser!':'Winner!'
}

//given an array of elements that consist of 1 string and one integer apiece; also an integer (win); also
//given the definition of miniwin, which is if one of the ASCII values of the string in the given element is 
//equal to the integer in the same element
//return 'Winner!' if the sum of miniwins is >= the win integer, 'Loser!' if it is not
//console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
//console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
//console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');