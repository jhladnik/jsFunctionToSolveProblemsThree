// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) { 
    //initialize an empty string (result); create a variable (carry) initialize it at 0; create a variable (i)
    //initialize it at 0; use a while statment to see if i < a.length or b.length, if so, n1 = i<a.length ? a[a.length - 1 - i] or
    //0, and n2 = i<b.length ? b[b.length - 1 - i] or 0, create a variable (sum) which will be equal to n1+n2+carry,
    //result set to sum%10 + result and carry set to sum/10 rounded down, increment i
    let result = '';
    let carry = 0;
    let i = 0;
  
    while(i < a.length || i < b.length){
      const n1 = i < a.length ? parseInt(a[a.length - 1 - i]) : 0;
      const n2 = i < b.length ? parseInt(b[b.length - 1 - i]) : 0;
  
      const sum = n1 + n2 + carry;
      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);
  
      i++;
    }
  
    if(carry > 0){
      result = carry + result;
    }
  
    result = result.replace(/^0+/, '');
    return result;
}

//given two integers as strings; strings can be up to 1000000 digits long
//return a string that is the representation of the two strings summed
//console.log(sumStrings('123','456'), '579')