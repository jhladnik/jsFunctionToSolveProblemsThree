// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

function saleHotdogs(n){
    //if n is less than 5, then 100; if less than 10, then 95; else 90 and multiply result by number of customers
    return (n<5 ? 100 : n<10 ? 95 : 90)*n
  }
  
  // n = amount of customers; if n<5, customers pay 100; if n>=5 and n<10, customers pay 95 each; if n>= 10, customers pay 90 each
  //return how much (money) is being taken in
  //input (1) output (100); input(5) output (475); input(11) output(990)