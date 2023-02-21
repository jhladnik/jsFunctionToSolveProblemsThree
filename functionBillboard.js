// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30){
    //change the name to an array of strings; create a counter; loop through the new array and increment the counter
    //by the price
    let arrOfName = name.split("");
    let totalPrice = 0
    
    for(let i=0; i<arrOfName.length; i++){
      totalPrice = totalPrice+price
    }
    return totalPrice
}

//given a name(string) and the price per letter being default of 30 but can change; every symbol including 
//spaces count as a letter; cannot use the * multiplier
//return the total that would cost to print the name given
//console.log(billboard("Jeong-Ho Aristotelis"), 600);
//console.log(billboard("Idwal Augustin"), 420);
//console.log(billboard("Werner Vígi", 15), 165);