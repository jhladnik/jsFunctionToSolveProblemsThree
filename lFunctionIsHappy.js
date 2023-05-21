var isHappy = function(n) {
    //use a conditional to see if the integer given is greater than 1 or less than 10, if so, false; else if the parameter === 1, return true; else we need to make the integer into a string, split it, change the entries back to integers, square them, then sum them, pass this sum back through the function (RECURSION)
    if(n<10 && n>1){
        return false;
    }else if(n === 1){
        return true;
    }
    let o = n.toString().split("");
    let p = o.map(el=>{
        return Math.pow(Number(el),2);
    });
    let q = p.reduce((acc,c)=>acc+c,0);
    return isHappy(q);
};

//given an integer
//return true if the integer's digits can be split, squared, and summed to eventually give the sum of 1; return false otherwise
//console.log(isHappy(19); true);
//console.log(isHappy(2); false);