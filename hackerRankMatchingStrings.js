// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example



// There are  instances of '',  of '' and  of ''. For each query, add an element to the return array, .

// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in stringList.

// matchingStrings has the following parameters:

// string stringList[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query
// Input Format

// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .

function matchingStrings(stringList, queries) {
    // initialize an empty array for our result
    let result = [];
    
    // loop through queries
    for (let i=0; i<queries.length; i++) {
        // initialize a counter to count our occurences
        let foundOne = 0;
        
        // loop through stringList
        for (let j=0; j<stringList.length; j++) {
            // use a conditional to monitor if queries[i] === stringList[j], if so, increment counter
            if (queries[i] === stringList[j]) {
                foundOne++;
            }
        }
        // once the loop completes, send to result
        result.push(foundOne);
    }
    // return our result array
    return result
}

// given an array of strings (stringList) and an array of strings (queries); 
// return an array of the number of occurences of each queries string in stringList
// console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']), [2, 1, 0]);
// console.log(matchingStrings(['aa', 'aa', 'a'], ['aa', 'a']), [2, 1]);