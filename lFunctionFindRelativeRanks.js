// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

var findRelativeRanks = function(score) {
    // Make a duplicate array of score and sort in decreasing order
    let dupeSort = score.slice(0).sort((a, b) => b-a);

    // create an empty array to hold results
    let resultArr = [];

    // loop through the original array and see where the element falls in dupeSort, label accordingly and push to resultArr
    for (let i=0; i<score.length; i++) {
        if (score[i] === dupeSort[0]) {
            resultArr.push("Gold Medal")
        } else if (score[i] === dupeSort[1]) {
            resultArr.push("Silver Medal")
        } else if (score[i] === dupeSort[2]) {
            resultArr.push("Bronze Medal")
        } else {
            resultArr.push((dupeSort.indexOf(score[i])+1).toString())
        }
    }

    return resultArr
};

// Given an array of integers (score) in no specific order
// Return an array of strings that label the highest integer in score as "Gold Medal", second highest as "Silver Medal", third highest as "Bronze Medal", and any proceeding integers as their respective place in the score array if it were sorted in decreasing order
// console.log(findRelativeRanks([5,4,3,2,1]), ["Gold Medal","Silver Medal","Bronze Medal","4","5"]);
// console.log(findRelativeRanks([10,3,8,9,4]), ["Gold Medal","5","Bronze Medal","Silver Medal","4"]);