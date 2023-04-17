// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

var busyStudent = function(startTime, endTime, queryTime) {
    //create a variable for the (times) that the students were studying in an array form; create a loop to length of startTime; create an empty array in the loop; nest a loop from startTime to endTime and push to empty array in string form; push filled array to times; return the length of a filter that is looking for an element including queryTime
    let times = [];

    for(let i=0; i<startTime.length; i++){
        let interval = [];
        for(let j=startTime[i]; j<=endTime[i]; j++){
            interval.push(j.toString());
        };
        times.push(interval);
    };
    return times.filter(el=>el.includes(queryTime.toString())).length;
};

//optimal speed solution
var busyStudent = function(startTime, endTime, queryTime) {
    let output=0;
    let size = startTime.length;

    for(let i=0;i<size;i++){

        if(startTime[i] <= queryTime && endTime[i] >= queryTime){
            output++;
        }
    }   

    return output
};
//given an array of integers (startTime); an array of integers (endTime); and an integer (queryTime)
//return the number students' times that contain queryTime if queryTime is an integer between startTime[i] and endTime[i] and i is representative of a single student
//console.log(busyStudent([1,2,3],[3,2,7],4), 1);
//console.log(busyStudent([4],[4],4), 1);