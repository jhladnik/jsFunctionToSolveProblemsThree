// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

var destCity = function(paths) {
    //loop through the original array to find all of the ending points; flatten the given array and find the string that has only one occurrence
    let destinations = [];
    for(let i=0; i<paths.length; i++){
        destinations.push(paths[i][1]);
    };
    let noSubs = paths.flat();

    return destinations.filter(el=>noSubs.indexOf(el)===noSubs.lastIndexOf(el)).toString()
};

//given an array of subarrays containing strings; the strings represent points at which to start and to end
//return the final destination, or the string that is an ending poing but not a beginning point
//console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]), "Sao Paulo" );
//console.log(destCity([["B","C"],["D","B"],["C","A"]]), "A");
//console.log(destCity([["A","Z"]]), "Z");