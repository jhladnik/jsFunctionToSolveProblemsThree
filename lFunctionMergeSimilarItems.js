// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:

// items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
// The value of each item in items is unique.
// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

// Note: ret should be returned in ascending order by value.

var mergeSimilarItems = function(items1, items2) {
    // create a Map of the two arrays, adding the weights if the values already are present; then return an array with the entries from the Map sorted in ascending order of value
    let itemMap = new Map();

    for(let [val,w] of items1){
        if(!itemMap.has(val)){
            itemMap.set(val,0);
        }
        itemMap.set(val, itemMap.get(val)+w);
    };

    for(let [val,w] of items2){
        if(!itemMap.has(val)){
            itemMap.set(val,0);
        }
        itemMap.set(val, itemMap.get(val)+w);
    };
    
    return Array.from(itemMap.entries()).sort((a,b)=>a[0]-b[0]);
};

//given two arrays (items1, items2) that will be full of subarrays containing pairs of integers
//return an array containing subarrays in ascending value of i[0]; the subarrays should be the length of unique i[0] with i[1] summed from both arrays
//console.log(mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]]), [[1,6],[3,9],[4,5]]);
//console.log(mergeSimilarItems([[1,1],[3,2],[2,3]], [[2,1],[3,2],[1,3]]), [[1,4],[2,4],[3,4]]);
//console.log(mergeSimilarItems([[1,3],[2,2]], [[7,1],[2,2],[1,4]]), [[1,7],[2,4],[7,1]]);