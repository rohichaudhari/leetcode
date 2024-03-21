// Add Digits
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it
var addDigits = function(num) {
    let sum = 0
    num = num.toString().split('');
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    if (sum > 9) 
    return addDigits(sum)
    return sum
};