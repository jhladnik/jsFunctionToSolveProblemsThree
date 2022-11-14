our goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(val=> !b.includes(val));
}
   
//given two arrays, first array with multiple integers and the second array with one integer
//return an array which contains the integers from the first array, in order, that are not contained in the second array
//input([1,2,3,4,5,4,4,4], [4]) output([1,2,3,5]); input([2,7,3,4,2,2,5,8], [2]) output([7,3,4,5,8])