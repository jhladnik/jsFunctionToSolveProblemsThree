// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

var countBattleships = function(board) {
    //create a counter; loop through the board array; nest a loop of the elements; use a conditional to see if the sub-array element is "X" and the next element is "." && board[i-1]sub-array element is not an "X", if these conditions apply, increment the counter; return the counter
    let ships = 0;

    for(let i=0; i<board[0].length; i++){
        if(board[0][i]==="X" && board[0][i+1]==="."){
            ships++;
        }else if(board[0][i]==="X" && i===board[0].length-1){
            ships++;
        }
    };
    for(let j=1; j<board.length; j++){
        for(let k=0; k<board[j].length; k++){
            if(board[j][k]==="X" && board[j][k+1]==="." && board[j-1][k]!=="X"){
                ships++;
            }else if(board[j][k]==="X" && k===board[j].length-1 && board[j-1][k]!=="X"){
                ships++;
            }
        };
    };
    return ships
};


//given a matrix of m x n; given "X" is equal to a battleship; given "." is equal to a space; given battleships have to be separated by "."; given any adjoining "x" (either vertical or horizontal) are considered to be one battleship
//return the number of battleships in the matrix
//console.log(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]), 2);
//console.log(countBattleships([["."]]), 0);
