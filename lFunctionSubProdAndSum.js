// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
    //multiply the digits of n and sum the digits of n, subtract sum from product...must make n an array first
     let arrOfN = n.toString().split("");
     let nums = arrOfN.map(function(num){
         return Number(num)
     })
     let sum = nums.reduce((a,c)=>a+c,0);
     let prod = nums.reduce((a,c)=>a*c)
     return prod-sum
 };
 
 //given a positive integer
 //return the difference of the product of the digits and the sum of the digits
 //input(234), output(15);
 //input(4421), output(21)