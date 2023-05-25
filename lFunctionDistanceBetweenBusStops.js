// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

var distanceBetweenBusStops = function(distance, start, destination) {
    //create an empty array to hold some values; find of start is less than or greater than destination, if the former, loop from start to destination and push distance[i] to the empty array, if the latter, loop from destination to start, push distance[j] to the empty array; find the sum of the created array; find the sum of distance; return the lesser of sum of created or sum of distance-sum of created
    let sumPath = [];

    if(start<destination){
        for(let i=start; i<destination; i++){
            sumPath.push(distance[i])
        };
    }else{
        for(let j=destination; j<start; j++){
            sumPath.push(distance[j]);
        };
    }
    let sum = sumPath.reduce((acc,c)=>acc+c,0);
    let difference = distance.reduce((acc,c)=>acc+c,0) - sum;

    return Math.min(sum,difference)
};

//given an array of integers (distance), an integer (start), and an integer (destination); all integers will be positive; we are given the fact that the distance array forms a circle
//return the shortest distance between start and destination
//console.log(distanceBetweenBusStops([1,2,3,4],0,1), 1);
//console.log(distanceBetweenBusStops([1,2,3,4],0,2), 3);
//console.log(distanceBetweenBusStops([1,2,3,4],0,3), 4);