// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

var checkRecord = function(s) {
    //create a counter for absent (absent); loop through s; use a conditional to see if "A" is s[i], if so, increment absent, check to see if absent is greater than 1, if not, return false; else if "L", use a conditional to see if s[i]+1 and s[i+2] are both === "L", if so, return false; return true
    let absent = 0;

    for(let i=0; i<s.length; i++){
        if(s[i]==="A"){
            absent++;
            if(absent>1){
                return false;
            }
        }else if(s[i]==="L" && s[i+1]==="L" && s[i+2]==="L"){
            return false;
        }
    };
    return true
};

//given a string of letters; the only letters being used are "A" which means absent, "L" which means late, and "P" which means present; given the criteria for an attendance award being the student is absent less than 2 days total and the student cannot be late for school for 3 days in a row or more
//return true if the student gets an attendance award, false otherwise
//console.log(checkRecord("PPALLP"), true);
//console.log(checkRecord("PPALLL"), false);