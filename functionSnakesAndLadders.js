// There is an array representing the squares on the game board.

// The starting square is at array element 0. The final square is the last array element.

// At each "turn" you move forward a number of places (according to the next dice throw).

// The value at the square you end up on determines what happens next:

// 0 Stay where you are (until next turn)
// +n This is a "ladder". Go forward n places
// -n This is a "snake". Go back n places
// Each snake or ladder will always end on a square with a 0, so you will only go up or down one at a time.

// Rules
// You are given a number of dice throws. The game continues until either:
// You have no throws left, OR
// You end up exactly on the final square
// At each turn, make your move, then go up the "ladders" and down the "snakes" as appropriate.

// If the dice roll overshoots the final square then you cannot move. Roll the dice again.

// Task
// Return the index of the array element that you ended up on at the end of the game.

var snakesAndLadders = function(board, dice) {
    //create an array that will hold your place on the board, 0 will be first el; loop through the dice array; use a
    //conditional to see if you need to move back or forward on the board, also test to see if the move
    //can be used due to going over or not; push the space you land on to the array; return last el of array
    let youAreHere = [0];
    
    for(let i=0; i<dice.length; i++){
      let spot = dice[i]+youAreHere[youAreHere.length-1];
      if(board[spot]<0){
        youAreHere.push(spot+(board[spot]));
      }else if(board[spot]>0 && board[spot]+youAreHere[youAreHere.length-1]<board.length-1){
        youAreHere.push(spot+board[spot]);
      }else if(board[spot]===0){
        youAreHere.push(spot)
      }else if(board[spot]>0 && board[spot]+youAreHere[youAreHere.length-1]===board.length-1){
        return board.length-1
      }
    }
    return youAreHere[youAreHere.length-1]
}

//given 2 arrays of integers (board,dice); integers in dice represent a throw of the dice and you
//are to move tha many spaces in board (starting from the 0th index); if you land on an integer with
//an integer other than 0, move that many spaces forward (pos int) or backwards (neg int); you
//can only reach the last index if you have the perfect number to get there, no overage
//return the index that yoiu end up on after all of the throws of the dice
//console.log(snakesAndLadders([0,0,3,0,0,0,0,-2,0,0,0], [2,1,5,1,5,4]), 10);