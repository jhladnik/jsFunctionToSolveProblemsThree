// You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].

// The following are the types of poker hands you can make from best to worst:

// "Flush": Five cards of the same suit.
// "Three of a Kind": Three cards of the same rank.
// "Pair": Two cards of the same rank.
// "High Card": Any single card.
// Return a string representing the best type of poker hand you can make with the given cards.

// Note that the return values are case-sensitive.

var bestHand = function(ranks, suits) {
    //create a counter for the suits (suitCount); loop through suits and see if all of the suits are the same using the counter, if suitCounter = 5, return flush, else create an empty array (cardCounts); loop through ranks and use a filter to filter for the iterator, use condtional to see if the length is 3 if so, return "Three of a Kind", else push count to cardCounts; return if there is a 2 in cardCounts or we habe a high card
    let suitCount = 1;

    for(let i=1; i<suits.length; i++){
        if(suits[i]===suits[0]){
            suitCount++;
        }
    };

    if(suitCount===5){
        return "Flush";
    }else{
        let cardCounts = [];

        for(let j=0; j<ranks.length; j++){
            let howMany = ranks.filter(el => el === ranks[j]);

            if(howMany.length>=3){
                return "Three of a Kind";
            }else{
                cardCounts.push(howMany.length);
            }
        }
        return Math.max(...cardCounts) === 2 ? "Pair":"High Card";
    };
};

//given two arrays, (ranks) which contains integers only, and (suits) which contains strings only; rank[i] has suit[i]; given the definitions of "Flush" being five cards of the same suit, "Three of a Kind" being three cards of the same rank, "Pair" being two cards of the same rank, and "High Card" being the largest valued single card
//return a string that represents the best type of hand that can be made with the cards given
//console.log(bestHand([13,2,3,1,9],["a","a","a","a","a"]), "Flush");
//console.log(bestHand([4,4,2,4,4],["d","a","a","b","c"]), "Three of a Kind");
//console.log(bestHand([10,10,2,12,9],["a","b","c","a","d"]), "Pair");