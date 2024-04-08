// Initially, you have a bank account balance of 100 dollars.

// You are given an integer purchaseAmount representing the amount you will spend on a purchase in dollars.

// At the store where you will make the purchase, the purchase amount is rounded to the nearest multiple of 10. In other words, you pay a non-negative amount, roundedAmount, such that roundedAmount is a multiple of 10 and abs(roundedAmount - purchaseAmount) is minimized.

// If there is more than one nearest multiple of 10, the largest multiple is chosen.

// Return an integer denoting your account balance after making a purchase worth purchaseAmount dollars from the store.

// Note: 0 is considered to be a multiple of 10 in this problem.


var accountBalanceAfterPurchase = function(purchaseAmount) {
    // divide purchaseAmount by 10 to get an integer containing a partial integer or fraction
    let smaller  = purchaseAmount/10;

    // return the beginning balance minus smaller rounded and multiplied by 10
    return 100 - (Math.round(smaller)*10)
};

// given a bank account with the starting balance of 100; given a purchaseAmount that will
// be a non-negative integer
// return the remaining balance if the purchasAmount is rounded to the closest increment of 10
// console.log(accountBalanceAfterPurchase(9); 90);
// console.log(accountBalanceAfterPurchase(15); 80);
// console.log(accountBalanceAfterPurchase(21); 80);