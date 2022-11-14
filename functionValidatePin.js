// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    //replace anyother characters than digits with nada
    let cushion = pin.replace(/\D/g,'');
    //create a conditional to see if we have two strings of the same length as well as the length
    if(cushion.length==pin.length && cushion.length==6){
      //if we have the same length in the two strings after
      //removal and the new string is 6 digits long we have a pin
      return true
    }else if(cushion.length==pin.length && cushion.length==4){
      //if we have the same length in the two strings after
      //removal and the new string is 4 digits long we have a pin
      return true
    }else{
      //conditions are not what they should be, we have a scammer
      return false
    }
}
  
//given a string of digits, letters, or a mixture of the two
//return true if the string is exactly 4 digits or 6 digits long, without any letters;
//and return false if the string does not match these parameters
//input('1234'), output(true); input("w4632"), output(false); input('876543'), output(true)