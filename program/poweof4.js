// Power of Four
// Example 1:
// Input: n = 16
// Output: true
var isPowerOfFour = function(n) {
    let i = 1;
    while (n > i){
        i *= 4
    }
    return i === n
};



