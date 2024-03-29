// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

function whoIsPaying(name){
    //find if the name is two letters or less, if so, return only it inside of an array; else split the name
    //into an array of elements; slice the first two letters off and join them back into a string; return the
    //name and slice in an array
    if(name.length<=2){
      return [name];
    }
    let arrName = name.split("");
    let cut = arrName.slice(0,2).join("");
    return [name,cut];
}

//given a string
//return an array that contains the string as an element and the first 2 letters of the string as the other element
//console.log(whoIsPaying("Mexico"),["Mexico", "Me"]);
//console.log(whoIsPaying("Melania"),["Melania", "Me"]);
//console.log(whoIsPaying("Melissa"),["Melissa", "Me"]);
//console.log(whoIsPaying("I"), ["I"]);
//console.log(whoIsPaying(""), [""]);