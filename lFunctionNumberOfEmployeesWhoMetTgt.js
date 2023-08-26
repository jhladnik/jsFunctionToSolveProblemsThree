// There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

// The company requires each employee to work for at least target hours.

// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

// Return the integer denoting the number of employees who worked at least target hours.

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    //return the length of hours filtered for >= target
    return hours.filter(el=>el>=target).length;
};

//given an array of non-negative integers (hours); given an integer (target)
//return the number of integers in hours >= target
//console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4,5], 3), 3);
//console.log(numberOfEmployeesWhoMetTarget([7,2,4,8,7,4,1,2], 5), 3);
//console.log(numberOfEmployeesWhoMetTarget([12,43,2,6,3,2,67,1], 68), 0);
//console.log(numberOfEmployeesWhoMetTarget([0,0,0,0,0,0], 0), 6);