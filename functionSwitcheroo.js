// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    //create an object switching the a's to b's and b's to a's
    let newX = {'a':'b', 'b':'a'};
    //replace the object inside the string of x
    let resultsXist = x.replace(/[ab]/g, m=>newX[m]);
    //return our result
    return resultsXist
}
  
//given a string of lowercase letters; all a's, b's, or c's
//return the string, switching the a's with b's and the b's with a's; leave any of the c's alone
//input("abc"), output("bac"); input("cccccc"), output("cccccc"); input("bbaaccbb"), output("aabbccaa")