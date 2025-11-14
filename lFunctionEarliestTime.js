// You are given a 2D integer array tasks where tasks[i] = [si, ti].

// Each [si, ti] in tasks represents a task with start time si that takes ti units of time to finish.

// Return the earliest time at which at least one task is finished.

var earliestTime = function(tasks) {
    // Initialize an empty array
    let taskTimes = [];

    // Loop through tasks, sum each element/subarray and push to taskTimes
    for (let i=0; i<tasks.length; i++) {
        let sum = tasks[i].reduce((acc,c) => acc+c, 0);
        taskTimes.push(sum);
    }

    // Find the lowest value in taskTimes
    let lowest = Math.min(...taskTimes);

    // Return the lowest value found
    return lowest
};

// Given an array "tasks" where each element contains a subarray with 2 integers, the first being the start time, and the second being the time taken
// Return the smallest sum if each of the subarrays has its elements summed together
// console.log(earliestTime([[1,6],[2,3]]), 5);
// console.log(earliestTime([[100,100],[100,100],[100,100]]), 200);