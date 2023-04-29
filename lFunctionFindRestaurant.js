// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.


var findRestaurant = function(list1, list2) {
    //create an empty array; loop through list1; nest a loop of list2; use a conditional to see if the elements exist in both arrays; if they do, sum the index and push to the empty array; sort the empty array by the second element in each subarray; create another empty array; loop through the first created array and use a conditional to see if the second element in each subarray is the same as the first subarray, if they are, push to the second empty array; return
    let common = [];

    for(let i=0; i<list1.length; i++){
        for(let j=0; j<list2.length; j++){
            if(list1[i]===list2[j]){
                let sum = i+j;
                common.push([list1[i],sum]);
            };
        };
    };

    common.sort((a,b)=>a[1]-b[1]);

    let lowestSum = [];

    for(let k=0; k<common.length; k++){
        if(common[k][1]===common[0][1]){
            lowestSum.push(common[k][0]);
        };
    };
    return lowestSum
};

//given two arrays of strings
//return the lowest summed indexed string in an array, that is common in both of the arrays; this means, if the string occurs in the first array and the second, the first[index]+second[index] must be the lowest
//console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]), ["Shogun"]);
//console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]), ["Shogun"]);
//console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]), ["sad", "happy"]);