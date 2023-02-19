// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

var judgeCircle = function(moves) {
    //create two counters, a vertical (vert) and horizontal (hori); loop through the given string and use a conditional to increment the two counters (R++, L--, U++, D--); if the counters are both equal to zero after the string has been looped through, return true, else false
    let vert = 0;
    let hori = 0;

    for(let i=0; i<moves.length; i++){
        if(moves[i]==="R"){
            hori++
        }else if(moves[i]==="U"){
            vert++
        }else if(moves[i]==="L"){
            hori--
        }else if(moves[i]==="D"){
            vert--
        }
    }
    return hori===0 && vert===0 ? true:false
};

//given a sting of mixed uppercased letters; the letters can be "U"(up), "D"(down), "L"(left), and "R"(right)
//return true if by going in the direction that the letters are implying, we would end back at the same location as we began; return false if not
//console.log(judgeCircle("UD"), true);
//console.log(judgeCircle("LL"), false);