// You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

// You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

// There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

// Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

// Return the minimum number of minutes needed to pick up all the garbage.

var garbageCollection = function(garbage, travel) {
    //create variables for each of the trucks; create a combined string to test if each of the trucks needs to run or not; for each truck, test the long string if it is included, if it is loop through the garbage array to arr-1 (leaving last element off); split each element into their own; nest a loop through the individual letters and use a conditional to see if the letter is the truck letter, if so, incremenet the variable created; then add travel time to the variable; create a variable for the last element of garbage, split the last element up to an array of individual letters; loop through the new array and increment the last element variable; use a condtional to see if each letter is in the last element, if it is not, subtract the last travel time; return truck variables and last sum variable
    let g = 0;
    let p = 0;
    let m = 0;

    let altogether = garbage.join("");

    if (altogether.includes("G")){
        //run G
        for(let i=0; i<garbage.length-1; i++){
            for(let j=0; j<garbage[i].length; j++){
                if(garbage[i][j]==="G"){
                    g++;
                };
            };
            g += travel[i];
        };
    };

    if (altogether.includes("P")){
        //run p
        for(let i=0; i<garbage.length-1; i++){
            for(let j=0; j<garbage[i].length; j++){
                if(garbage[i][j]==="P"){
                    p++;
                };
            };
            p += travel[i];
        };
    };

    if (altogether.includes("M")){
        //run m
        for(let i=0; i<garbage.length-1; i++){
            for(let j=0; j<garbage[i].length; j++){
                if(garbage[i][j]==="M"){
                    m++;
                };
            };
            m += travel[i];
        };
    };

    let lastSum = 0;

    let lastEl = garbage[garbage.length-1].split("");
    //run last element
    for(let k=0; k<lastEl.length; k++){
        lastSum++
    };

    if(altogether.includes("G") && !garbage[garbage.length-1].includes("G")){
        lastSum -= travel[travel.length-1];
    }else if(altogether.includes("P") && !garbage[garbage.length-1].includes("P")){
        lastSum -= travel[travel.length-1];
    }else if(altogether.includes("M") && !garbage[garbage.length-1].includes("M")){
        lastSum -= travel[travel.length-1];
    }


    return g+p+m+lastSum
};

//given 2 arrays (garbage, travel); garbage an array of strings made up randomly of G(glass), M(metal), P(paper); each type of garbage needs a specific truck; travel array is made up of integers which are the travel times in minutes between the elements of garbage array; no two trucks can be at the same stop at the same time; each character counts as one minute
//return an integer representative of the minimum time that it takes to pickup all of the trash
//console.log(garbageCollection(["G","P","GP","GG"], [2,4,3]), 21);
//console.log(garbageCollection(["MMM","PGM","GP"], [3,10]), 37);