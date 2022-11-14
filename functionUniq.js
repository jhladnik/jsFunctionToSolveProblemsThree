// DESCRIPTION:
// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]

function uniq(a){
    return a.filter(function(x,i){return i == 0 || !(a[i-1] == x);});
}