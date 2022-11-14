const stray = nums => nums.reduce((a, b) => a ^ b)


//given an odd length array of integers, all of the integers are the same except for one integer
//return the single integer that is not like the rest
//input([1,1,1,4,1,1]) output(4); input([5,5,5,5,3,5,5]) output(3)