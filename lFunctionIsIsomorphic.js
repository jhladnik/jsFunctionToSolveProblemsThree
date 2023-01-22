// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function(s, t) { 
    if(s.length!==t.length){
        return false;
    }
    for(let i=0;  i<s.length; i++){
      let a = s.indexOf(s[i]);
      let b = t.indexOf(t[i]);
      if (t[a] !== t[i] || s[b] !== s[i]) {
         return false;
      };
   };
   return true;
};

//given 2 strings (s and t)
//return true if the characters in s can be replaced to get t; return false if this cannot be done
//console.log(isIsomorphic("egg", "add"), true);
//console.log(isIsomorphic("foo", "bar"), false);
//console.log(isIsomorphic("paper", "title"), true)