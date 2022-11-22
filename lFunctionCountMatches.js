//You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

var countMatches = function(items, ruleKey, ruleValue) {
    //create an empty array to hold any matches, then loop through the array of items;
    //create condition that if true on ruleKey:ruleValue, push to empty array, return new array length
    let matches = []
    for (let i=0; i<items.length; i++){
        if (ruleKey=='type' && ruleValue==items[i][0]){
            matches.push(items[i]);
        }else if(ruleKey==='color' && ruleValue==items[i][1]){
            matches.push(items[i]);
        }else if(ruleKey=='name' && ruleValue==items[i][2]){
            matches.push(items[i]);
        }
    }
    return matches.length
};

//given an array of arrays(items) each containing containing [type, color, name]; a ruleKey that can be "type"||"color"||"name"; 
//and a ruleValue that will be set to a string to correspond with the ruleKey
//return the number of items that have a match with the ruleKey:ruleValue

//Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
//Output: 1

//Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
//Output: 2