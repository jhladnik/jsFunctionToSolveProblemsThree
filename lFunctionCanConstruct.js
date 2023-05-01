// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
    //find the difference of magazine.length - ransomNote.length; create an array (holder)and hold magazine in it; use a conditional and if the difference is negative, return false, else, loop through ransomNote; use a conditional to find if the substring occurs in holder[holder.length-1], if it does, replace the substring with "" and push to holder; return true if the last element of holder has a length of the difference, false if not
    let diff = magazine.length - ransomNote.length
    let holder = [magazine];

    if(diff<0){
        return false;
    }else{
        for(let i=0; i<=ransomNote.length; i++){
            if(holder[holder.length-1].includes(ransomNote[i])){
                let takeIt = holder[holder.length-1].replace(ransomNote[i],"");
                holder.push(takeIt);
            };
        };
    };
    return holder[holder.length-1].length === diff ? true:false;
};

//given two strings (ransomeNote) and (magazine)
//return true if ransomeNote can be constructed from the letters in magazine, else false; the letters in magazine can only be used one time
//console.log(canConstruct("a", "b"), false);
//console.log(canConstruct("aa", "ab"), false);
//console.log(canConstruct("aa", "aab"), true);