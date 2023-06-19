// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

function isFlush(cards) {
    //split all of the cards elements into individual arrays (arrOfCards);
    //loop through cards starting at i=1; use conditional to see if arrOfCards[i][arrOfCards[i].length-1]!==
    //arrOfCards[i-1][arrOfCards[i-1].length-1]; if so, return false;outside of loop, return true
    
    let arrOfCards = cards.map(el=>{
      return el.split("")
    })
    
    for(let i=1; i<arrOfCards.length; i++){
      if(arrOfCards[i][arrOfCards[i].length-1]!==arrOfCards[i-1][arrOfCards[i-1].length-1]){
        return false;
      }
    };
    return true
}

//given an array of strings (cards) which has a length of 5; strings will consist of a string (2,3,4
//5,6,7,8,9,10,J,Q,K,A) and a second string (C,D,H,S);
//return true if all of the second strings are the same; else false
//console.log(isFlush([  "AS", "3S",  "9S", "KS", "4S" ]), true);
//console.log(isFlush([  "AD", "4S", "10H", "KC", "5S" ]), false);
//console.log(isFlush([  "QD", "4D", "10D", "KD", "5D" ]), true);
//console.log(isFlush([  "AD", "4S",  "7H", "KC", "5S" ]), false);