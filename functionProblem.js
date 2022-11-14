//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    //figure out if x is and integer
      if(x*1===x){
      //take x and multiply by 50 first, then add 6
        return (x*50)+6
      //if x is a string, return Error
      }else{
        return 'Error'
      }
}
    
//Given the parameter x, multiply by 50 and increase that result by 6. Strings should result in an error
//Return an integer
//Input (2) Output (106); Input ('2') Output Error; Input (-5) Output (-244)