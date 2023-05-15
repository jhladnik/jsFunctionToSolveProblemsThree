// You are given an integer array prices where prices[i] is the price of the ith item in a shop.

// There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.

var finalPrices = function(prices) {
    //create an empty array to return; on each iteration, slice a new array starting at the next element; loop through this new array and push the first element that is lower than the original element; if there is none, push the original element; return the new created array
    let onSpecial = [];

    for(let i=0; i<prices.length; i++){
        let cut = prices.slice(i+1);
        if(Math.min(...cut)<=prices[i]){
            let smallerThan = cut.filter(el=>el<=prices[i]);
            onSpecial.push(prices[i]-smallerThan[0]);
        }else if(Math.min(...cut)>prices[i]){
            onSpecial.push(prices[i]);
        };
    };
    return onSpecial
};

//**FASTEST SOLUTION**/
var finalPrices = function(prices) {
    let stack=[];
    let result=[];
    for(let i=prices.length-1;i>=0;i--)
    {
        while(stack.length && stack[stack.length-1]>prices[i])
        {
            stack.pop();
        }
        result[i]=stack.length===0 ? prices[i] : prices[i]-stack[stack.length-1];       
        stack.push(prices[i]);
    }
 return result;   
};

//given an array of integers; given the definition of a "special discount" that is the lowest index following any given element that is less in value
//return an array of integers that have a "special discount" to them,  if possible
//console.log(finalPrices([8,4,6,2,3]), [4,2,4,2,3]);
//console.log(finalPrices([1,2,3,4,5]), [1,2,3,4,5]);
//console.log(finalPrices([10,1,1,6]), [9,0,1,6]);