// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

function tea42(input) {
    //change the input to a string
    let strOfInput = input.toString();
    //replace the 2's without t's
    return strOfInput.replace(/2/g,'t')
};

//given a string of letters, or a number
//return a string where the number 2 is converted to a lowercase 't'
//input('coffee'), output('coffee');
//input(9022), output('90tt');
//input('2u2u'), output('tutu')