// There are n availabe seats and n students standing in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.

var minMovesToSeat = function(seats, students) {
    // sort both seats and students in increasing order; create a variable (counter) to count our moves; loop through students and get the absolute difference between the specific element in students and the specific element in seats; increment the differences to counter; return counter
    seats.sort((a,b) => a-b);
    students.sort((a,b) => a-b);

    let counter = 0;

    for (let i=0; i<students.length; i++) {
        let diff = Math.abs(students[i] - seats[i]);
        counter += diff
    }

    return counter
};

// given an array of integers (seats); given an array of integers (students)
// return the minimum number to make the elements of students equal that of the elements of seats if you can move one student one place at a time
// console.log(minMovesToSeat([3,1,5], [2,7,4]), 4);
// console.log(minMovesToSeat([4,1,5,9], [1,3,2,6]), 7);
// console.log(minMovesToSeat([2,2,6,6], [1,3,2,6]), 4);