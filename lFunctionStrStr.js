// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

//given a string (haystack) and a substring (needle)
//return the index number of the first occurrence of the substring in the string, return -1 if the substring does not exist
//input(haystack = 'sadbutsad', needle = 'sad'), output(0);
//input(haystack = 'leetcode', needle = 'leeto'), output(-1);