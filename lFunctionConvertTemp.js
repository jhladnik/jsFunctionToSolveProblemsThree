// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

var convertTemperature = function(celsius) {
    return [(celsius+273.15),(celsius*1.8+32)]
};

//given a non-negative floating integer rounded to 2 decimal places representing a temperature in Celcius measurement; kelvin = Celcius + 273.15; Farenheit = Celcius*1.80 + 32
//return an array (ans) with the first element being the converted Celcius temp to Kelvin, and the second element to Farenheit within 5 decimal places of the actual answer
//console.log(convertTemperature(36.50), [309.65, 97.7])
//console.log(convertTemperature(122.11), [395.26, 251.798])