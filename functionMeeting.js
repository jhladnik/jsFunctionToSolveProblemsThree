// So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

// Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

// example:

// [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

// result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.

// If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".


function meeting(x, need){
    //use a conditional to see if need < 1, if so, return 'Game On', else create a sum variable (sum); create an empty
    //array (theseTaken); use the map method (notNeeded) to subtract the length of el[0] from el[1]; loop through this array and
    //push the element to theseTaken, and sum sum and notNeeded[i]; use a conditional to see if sum >= need, if so, return
    //theseTaken; return "Not enough!"
    
    if(need < 1){
      return 'Game On';
    }else{
      let sum = 0; 
      let theseTaken = [];
      
      let notNeeded = x.map(el=>{
        return el[1] - el[0].length;
      });
      
      for(let i=0; i<notNeeded.length; i++){
        if(notNeeded[i]<0){
          sum += 0;
          theseTaken.push(0);
        }else{
          sum += notNeeded[i];
          if(sum > need){
            theseTaken.push(sum-need);
            return theseTaken
          }else if(sum === need){
            theseTaken.push(notNeeded[i]);
            return theseTaken;
          }else{
            theseTaken.push(notNeeded[i])
          }
        };
      };
      return 'Not enough!';
    };
}

//given an array filled with subarrays (x); each sub will have the 0th element a string representing a number of 
//attendees and an element 1 which is an integer that represents how many chairs are in the room; given an integer
//(need) which is how many chairs you need
//return an array which the elements will equal the number of free chairs in each room until need is met; if need ===0
//return "Game On"; if there are not enough free chairs in x, return "Not enough!"
//console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4), [0, 1, 3]);
//console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5), [0, 0, 1, 2, 2]);
//console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0), 'Game On');