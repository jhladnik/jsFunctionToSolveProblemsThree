// In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade). You will be given a list (lst) of climbing grades and you have to write a function (sort_grades) to return a list of the grades sorted easiest to hardest.

// If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

function sortGrades(lst){
    //create an array of strings from the lowest difficulty to highest difficulty; create an empty array;
    //loop through difficulty; nest a loop of lst; if difficulty and lst match, push to empty array
    
    let difficulty = ['VB','V0','V0+','V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','V16','V17'];
    
    let list = [];
    
    for(let i=0; i<difficulty.length; i++){
      for(let j=0; j<lst.length; j++){
        if(difficulty[i]===lst[j]){
          list.push(lst[j]);
        };
      };
    };
    return list
}

//given the bouldering difficulty levels; given a list of strings that represents levels in no specific order
//return a list of strings that has the given list sorted in increasing difficulty level
//console.log(sortGrades(["V7", "V12", "V1"]), ["V1", "V7", "V12"]);
//console.log(sortGrades(["V13", "V14", "VB", "V0"]), ["VB", "V0", "V13", "V14"]);
//console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]), ["VB", "V0", "V0+", "V2", "V6", "V16"]);
//console.log(sortGrades([]), []);