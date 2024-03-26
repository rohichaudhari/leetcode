// 69. Sqrt(x)
// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

var mySqrt = function(x) {
    let sqrt = 0;
    for(let i = 1; x > 0; i += 2 ){
        x = x - i
        if (x >= 0) {
            sqrt++
        }
    }
    return sqrt
};