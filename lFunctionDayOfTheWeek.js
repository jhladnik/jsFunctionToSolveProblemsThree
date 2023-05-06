// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

var dayOfTheWeek = function(day, month, year) {
    //create a date format in yyyy-mm-dd in a string, use the new Date method on this; create an array from Sunday (being 0th) to Saturday (being 6th); get the number of day using the getDay method; return array[number from getDay]
    let date = new Date(year.toString()+"-"+month.toString()+"-"+day.toString())
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayNum = date.getDay();
    return days[dayNum]
};

//given an integer (day), an integer (month), and an integer (year)
//return the day of the week that the date is for
//console.log(dayOfTheWeek(31,8,2019), "Saturday");
//console.log(dayOfTheWeek(18,7,1999), "Sunday");
//console.log(dayOfTheWeek(15,8,1993), "Sunday");
