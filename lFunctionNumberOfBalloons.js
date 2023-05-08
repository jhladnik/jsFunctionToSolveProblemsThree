// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

var maxNumberOfBalloons = function(text) {
    //create an array with the letters that only occur once in the string we need to match (once); change text to an array (arrText); create an empty array (nums); loop over once and filter arrText for the element, push the result length to nums; find the lowest value in nums and make sure the length is 3, if not, return 0; create an array containing "l" and "o" (twice); create an empty array (nums2); loop through twice and filter arrText for the elements; push length of the new array to nums2; find the lowest value of nums2; make sure the length is 2, else return 0; divide lowest value of nums2 by 2 and round down; return lowest value between nums and nums2
    let once = ["a","b","n"];
    let arrText = text.split("");

    let nums = [];

    for(let i=0; i<once.length; i++){
      let ocurens = arrText.filter(el=> el === once[i]).length;
      nums.push(ocurens);
    };

    if(nums.length<3){
      return 0
    }
    let minNums = Math.min(...nums);

    let twice = ["l","o"];
    let nums2 = [];

    for(let j=0; j<twice.length; j++){
      let twoTimes = arrText.filter(em=> em === twice[j]).length
      nums2.push(twoTimes);
    };

    if(nums2.length<2){
      return 0
    }
    let minNums2 = Math.floor(Math.min(...nums2)/2);

    return Math.min(minNums,minNums2)
};

//given a string of letters;
//return an integer that represents the number of times that "balloon" can be spelt if using the letters in the given string only one time apiece
//console.log(maxNumberOfBalloons("nlaebolko"), 1);
//console.log(maxNumberOfBalloons("loonbalxballpoon"), 2);
//console.log(maxNumberOfBalloons("leetcode"), 0);