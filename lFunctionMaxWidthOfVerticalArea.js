// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

// Note that points on the edge of a vertical area are not considered included in the area.

var maxWidthOfVerticalArea = function(points) {
    // create an empty array to hold the first index of each element
    let xAxis = [];

    // loop through points and push the first index of every element to xAxis
    for (let j=0; j<points.length; j++) {
        xAxis.push(points[j][0])
    }

    // sort xAxis in decreasing order
    xAxis.sort((a,b)=>b-a);

    // create a counter to hold results
    let counter = 0;

    // loop through xAxis
    for (let i=0; i<xAxis.length; i++) {
        // use a conditional to see if i-(i+1) is greater than the previous result, if it is, counter is that difference
        if (xAxis[i] - xAxis[i+1] > counter) {
            counter = xAxis[i] - xAxis[i+1]
        }
    }

    // return largest difference (counter)
    return counter
};

// given an array of coordinates in integer form
// return the largest difference in the x-axis that has no points inside of it
// console.log(maxWidthOfVerticalArea([8,7],[9,9],[7,4],[9,7]); 1);
// console.log(maxWidthOfVerticalArea([3,1],[9,0],[1,0],[1,4],[5,3],[8,8]); 3);