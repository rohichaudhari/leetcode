// Power of Three
// Input: n = 27
// Output: true
// Explanation: 27 = 33
var isPowerOfThree = function(n) {
    while(n > 1){
        n /= 3;
    }
    return n===1;
};
  