// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
    // create an empty array to hold our return values (vals); loop through grades; inside the loop, use a conditional to find if the grade needs to be rounded, if so round and push to vals; else push the grade to vals; return vals
    let vals = [];
    
    for (let i=0; i<grades.length; i++) {
        let rnd = Math.ceil(grades[i]/5) * 5
        let diff = rnd - grades[i]
        
        if (Math.abs(diff) < 3 && grades[i] > 37) {
            vals.push(rnd)
        } else {
            vals.push(grades[i])
        }
        
    }
    return vals
}