// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    //lets add a variable to get the decimal of the inputs
    let c = a+b;
    //annnnndd we will need the binary of the decimal
    let keanu = c.toString(2);
    //return the string of the binary
    return keanu
}
  
//given two inputs, a and b; the phrase "'a' + 'b' = 'sum' in decimal or '' in binary"
//return the phrase given with the inputs summed to give the decimal as well as what that decimal is in binary as a string
//input(2,2), ouput((2 + 2 = 4 in decimal or 0100 in binary)); input(6,2), output((6 + 2 = 8 in decimal or 1000 in binary))