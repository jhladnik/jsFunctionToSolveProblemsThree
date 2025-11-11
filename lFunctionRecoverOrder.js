// You are given an integer array order of length n and an integer array friends.

// order contains every integer from 1 to n exactly once, representing the IDs of the participants of a race in their finishing order.
// friends contains the IDs of your friends in the race sorted in strictly increasing order. Each ID in friends is guaranteed to appear in the order array.
// Return an array containing your friends' IDs in their finishing order.

var recoverOrder = function(order, friends) {
    // create a an array by using the filter method on order with the parameter that friends includes the integer in order
    let finish = order.filter(num => friends.includes(num));
    // return the new array
    return finish
};

// Given two arrays, "order" which is an integer array from 1 to n, and "friends" which is an integer array.
// Return an integer array that only contains the integers from friends but in the correct order they are shown in order
// console.log(recoverOrder([3,1,2,5,4], [1,3,4]), [3,1,4]);
// console.log(recoverOrder([1,4,5,3,2], [2,5]), [5,2]);