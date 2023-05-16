// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    //create an array of recipe keys (arrRecKeys), an array of recipe values (arrRecVals); create an array of available keys (arrAvailKeys)
    //, an array of available values (arrAvailVals); create an empty array; loop through arrRecKeys; find index of the element in arrAvailKeys,
    //use a conditional to see if the element exists in arrAvailKeys, if it doesn't, return 0, if it does divide the value at index
    //of arrAvailVals by arrRecVals value, push result to array; return the min of the array created
    
    let arrRecKeys = Object.keys(recipe);
    let arrRecVals = Object.values(recipe);
    
    let arrAvailKeys = Object.keys(available);
    let arrAvailVals = Object.values(available);
    
    let canMake = [];
    
    for(let i=0; i<arrRecKeys.length; i++){
      let exists = arrAvailKeys.indexOf(arrRecKeys[i]);
      if(exists === -1){
        return 0;
      }else{
        let goesIn = Math.floor(arrAvailVals[exists] / arrRecVals[i]);
        canMake.push(goesIn);
      };
    };
    return Math.min(...canMake);
}

//given two objects (recipe) and (available)
//return the max number of items that can be made if we are using available's keys/values to make recipe
//console.log(cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200}), 2)
//console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},{sugar: 500, flour: 2000, milk: 2000}), 0)