// There is a class with m students and n exams. You are given a 0-indexed m x n integer matrix score, where each row represents one student and score[i][j] denotes the score the ith student got in the jth exam. The matrix score contains distinct integers only.

// You are also given an integer k. Sort the students (i.e., the rows of the matrix) by their scores in the kth (0-indexed) exam from the highest to the lowest.

// Return the matrix after sorting it.

var sortTheStudents = function(score, k) {
    //return the matrix having sorted by the kth element
    return score.sort((a,b)=>b[k]-a[k])
};

//given a matrix with all the subarrays being the same length (score); given an integer (k)
//return a matrix with the subarrays sorted in decreasing order of the kth element
//console.log(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2), [[7,5,11,2],[10,6,9,1],[4,8,3,15]]);
//console.log(sortTheStudents([[3,4],[5,6]], 0), [[5,6],[3,4]]);