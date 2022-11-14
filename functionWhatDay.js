// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) {
    //create an array of the days of the week
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //we have to make sure that we can find the correct element
    let elCorrect = weekdays[num-1];
    //create that conditional
    if(num>=1 && num<=7){
      return elCorrect;
    }else{
      //throw the error if someone isn't aware that there are 7 days in a week
      return "Wrong, please enter a number between 1 and 7"
    }
}
  
//given the numbers 1-7, days of the week are stated as (1="Sunday", 2="Monday", etc.);
//return the day of the week as a string that corresponds with the number given; 
//if the number given is not 1-7, return "Wrong, please enter a number between 1 and 7"
//input(1), output("Sunday"); input(5), output("Thursday"); input(13), output("Wrong, please enter a number between 1 and 7")