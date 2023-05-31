var findWinners = function(matches) {
    //create an array of all the matches' losers (losers); create an array of all of the matches' winners (winners); create an empty array (oneLoss); loop through the losers array and use a conditional to find elements that only occur once, push to oneLoss; create an empty array (noLoss); loop through winners and see if the element occurs in losers, if it does not, push to noLoss; sort both oneLoss and noLoss and return [[noLoss],[oneLoss]]
    let losers = matches.map(el=>{
        return el[1];
    });

    let winners = matches.map(em=>{
        return em[0];
    });

    let oneLoss = [];

    for(let i=0; i<losers.length; i++){
        if(losers.indexOf(losers[i]) === losers.lastIndexOf(losers[i])){
            oneLoss.push(losers[i]);
        }
    };

    let noLoss = [];

    let setLosers = [...new Set(losers)];
    let set = [...new Set(winners)];

    for(let j=0; j<set.length; j++){
        if(!setLosers.includes(set[j])){
            noLoss.push(set[j]);
        }
    };

    oneLoss.sort((a,b)=>a-b);
    noLoss.sort((a,b)=>a-b);

    return [noLoss,oneLoss]
};

//given an array of subarrays (matches) in the form of [0,1] where 0 is the winner of a match and 1 is the loser of the match
//return an array with 2 subarrays/lists in the form of [0,1] where 0 is the sub which contains all players that are undefeated and 1 is a sub which contains all players that have only lost once; the subs should be listed in increasing order
//console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]), [[1,2,10],[4,5,7,8]]);
//console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]), [[1,2,5,6],[]]);