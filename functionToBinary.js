// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

function toBinary(n){
    //lets use the toString method with the 2 radix
    return Number(n.toString(2));
}
  
//given a non-negative integer
//return what the integer's equivalent is in binary format
//input(i), ouput(1); input(3), output(11); input(2), output(10)
