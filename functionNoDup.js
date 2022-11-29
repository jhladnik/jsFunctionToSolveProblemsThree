// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
    //map through the strings, separating them into individual elements (letters)
    //loop though the new arrays and test to see if the letter is the same as the next, push if it is not

    let splitDup = s.map(el=>el.split(""));
    let noDup = []
    let dupFind = splitDup.map(function(em){
        let minusDup = [];
        for (let i=0; i<em.length; i++){
        if (em[i] != em[i+1]){
            minusDup.push(em[i]);
        };
        };
        let together = minusDup.join("");
        noDup.push(together)
    });
    return noDup
};

//given an array of strings in lowercase with no spaces
//return an array of strings with the consecutive duplicate letters removed
//console.log(dup(["abracadabra","allottee","assessee"])); output(["abracadabra","alote","asese"])
//console.log(dup(["kelless","keenness"])); output(["keles","kenes"])