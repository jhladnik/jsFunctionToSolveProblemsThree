function twoSort(s) {
    //sort the array alphabetically
    s.sort();
    //return the 0th index, split and then joined to make a string with the '***'
    return s[0].split("").join('***')
  }
  
  //given an array of strings
  //return the first string of the array after the array has been sorted alphabetically;
  //the string that is being separated should have each letter separated by '***'
  //input (['this','is','the','only','test']), output('i***s')