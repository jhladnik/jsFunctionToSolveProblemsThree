// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid.

// For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

var minDeletionSize = function(strs) {
    // find the length of the elements in strs
    let leng = strs[0].length;

    // create a counter for the amount of columns we need to delete
    let count = 0;

    // loop to leng
    for (let i=0; i<leng; i++){
        // create an empty string to hold the bits of the subs
        let column = '';

        // loop through the elements and append i to column
        for (let letters of strs) {
            column += letters[i];
        }
        // split column up into an array
        let arrOfCol = column.split("");

        // need copy of arrOfCol joined to a string
        let dupe = arrOfCol.slice(0).join("");

        // sort
        arrOfCol.sort();

        // join sorted
        let str = arrOfCol.join("");
        
        // compare both strings and increment if not same
        if(str !== dupe) {
            count++
        }

    }
    // return count
    return count
};

// given an array of strings that are the same length
// deleting any columns that aren't sorted lexicographically top to bottom when the strings
// form a grid, return the number of columns that would need to be deleted
// console.log(minDeletionSize(["cba","daf","ghi"]); 1);
// console.log(minDeletionSize(["a","b"]); 0);
// console.log(minDeletionSize(["zyx","wvu","tsr"]); 3);