// You are given an integer n, the number of teams in a tournament that has strange rules:

// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
// Return the number of matches played in the tournament until a winner is decided.

var numberOfMatches = function(n) {
    //use a condtional to see if we are down to 1 team, if so, return 0, else test if n is odd or even, if even divide by 2 and add to numberOfMatches(n/2), else subtract one from n, divide by 2 and add to numberOfMatches((n-1)/2 + 1) RECURSION
 
    if(n===1){
        return 0;
    }else{
        if(n%2===0){
          return n/2 + numberOfMatches(n/2);
        }
        return (n-1)/2 + numberOfMatches((n-1)/2 + 1)
    };
};

//* Fastest Solution */
// var numberOfMatches = function(n) {
//     if (n === 1) return 0;
//     if (n === 2) {
//       return 1;
//     }
//     const match = Math.floor(n / 2);
//     const v = n - match;
//     return numberOfMatches(v) + match;
// };

//given an integer (n); given that if n is an odd integer, n-1 should be used in it's placed
//return the number of matches that would need to be played to decide a winner if n was a number of teams in a tournament playing eachother
//console.log(numberOfMatches(7), 6);
//console.log(numberOfMatches(14), 13);
//console.log(numberOfMatches(2), 1);