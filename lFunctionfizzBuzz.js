// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

var fizzBuzz = function(n) {
    //create a loop that pushes all results to an array but make replacements as necessary
    let fizzBuzz = []
    for(let i=1; i<=n; i++){
        if(i%3===0 && i%5===0){
            fizzBuzz.push("FizzBuzz");
        }else if(i%3===0){
            fizzBuzz.push('Fizz');
        }else if(i%5===0){
            fizzBuzz.push("Buzz")
        }else{
            fizzBuzz.push(i.toString())
        }
    }
    return fizzBuzz
};

//given an integer (n)
//return an array of strings counting from 1 to n; replace any integer that is divisible by both 3 and 5 with "FizzBuzz";
//replace any integer that is divisible by 3 with "Fizz"; and replace any integer that is divisible by 5 with "Buzz"
//input(n=3), output(['1','2','Fizz']);
//input(n=5), ouput(['1','2','Fizz','4','Buzz']);
//input(n=15), output(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])