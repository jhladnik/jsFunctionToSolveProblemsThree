// You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.

// Return the sum of encrypted elements.

var sumOfEncryptedInt = function(nums) {
   // map through nums and split the digits up if need be
   let numsSplit = nums.map(el=>{
       // split up to subarray of strings
       let strToNums = el.toString().split("");
       // change the elements back to integers
       let backToNum = strToNums.map(em=>{
           return Number(em)
       });
       // find largest integer and make it a string
       let largest = Math.max(...backToNum).toString();
       // create a holding array
       let holder = [];
       // loop through strToNums and push largest to the holder array
       for (let i=0; i<strToNums.length; i++) {
           holder.push(largest)
       };
       // join the strings back together
       let strTogether = holder.join("");
       // return the string after changing to an integer
       return Number(strTogether)
   })
   // add all elements of the new array together and return
   return numsSplit.reduce((acc,c)=>acc+c,0)
};

// given an array of positive integers
// return the sum of the array if for every element in the array, the individual digits are replaced by the highest value digit in that local element
// console.log(sumOfEncryptedInt([1,2,3]); 6);
// console.log(sumOfEncryptedInt([10,21,31]); 66);