// You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.

// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.

// Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative.

var buyChoco = function(prices, money) {
    //sort prices in increasing order; use a conditional to see if prices[0]+prices[1] > money, if so, return money, else, return the difference of money and the first two elements
    prices.sort((a,b)=>a-b);

    if(prices[0] + prices[1] > money){
        return money;
    }else{
        return money - (prices[0] + prices[1]);
    }
};

//given an array of integers (prices); given an integer (money)
//return the greatest amount of money that will be left over after purching two prices[i]; if two prices[i] cannot be purchased with money, return money
//console.log(buyChoco([1,2,2], 3), 0);
//console.log(buyChoco([3,2,3], 3), 3);