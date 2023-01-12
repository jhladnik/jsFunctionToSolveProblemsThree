// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.



var average = function(salary) {
    //sort the array in increasing order; grab a duplicate of the new array; find what the first element is and the last element is; sum the duplicate array and subtract the first el and last el amounts; return the sum divided by the length of the original array
    let inOrder = salary.sort((a,b)=>a-b);
    let dupe = inOrder.slice(0);
    let lessFirst = inOrder.shift();
    let lessLast = inOrder.pop();

    let sum = dupe.reduce((acc,c)=>acc+c, 0)-lessFirst-lessLast;
    return sum/salary.length
};

//given an array of numbers
//return the average of the numbers if the largest and the smallest are removed
//console.log(average([4000,3000,1000,2000]), 2500);
//console.log(average([1000,2000,3000]), 2000);