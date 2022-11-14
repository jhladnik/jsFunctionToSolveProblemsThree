// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
    //create an array
    let nHolder = [];
    //create an array with x
    let xArr = x.split("")
    //create a loop
    for(let i=0; i<=xArr.length; i++){
      if(xArr[i]=="n"){
        //if the element is equal to a bump, push it to the array
        nHolder.push(i)
      }
    }
    //if the new array has 15 or less bumps, Woohoo, else...ded
    if(nHolder.length<=15){
      return "Woohoo!";
    }else{
      return "Car Dead"
    }
}
  
//given a string of "_" and "n"
//return "Woohoo!" if there are 15 or less "n" in it; return "Car Dead" if there
//are more than 15 "n"
//input("____n"), output("Woohoo!"); input("nnnnnnnnnnnnnnnn"), output("Car Dead")