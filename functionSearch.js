// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

function search(budget, prices) {
    //sort the prices then filter anything that is less than or equal to the budget
    //into a new array, change the array to a string and return
    prices.sort((a,b)=>a-b);
    let affordable = prices.filter(el=>el<=budget);
    return affordable.toString()
}

//given a number (budget) and an array of prices
//return all of the prices that are equal or less than the budget number in string
//form and in ascending order
//input(3,[6,1,2,9,2]), output('1,2,2');
//input(14,[7,3,23,9,14,20,7]), output('3,7,7,9,14')