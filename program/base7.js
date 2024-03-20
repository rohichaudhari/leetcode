// base 7
// Given an integer num, return a string of its base 7 representation.
// Example 1:
// Input: num = 100
// Output: "202"
var convertToBase7 = function (num) {
    let temp = Math.abs(num);
    let res = '';
    
    while(temp !== 0){
        res = temp % 7 + res;
        temp = Math.floor(temp / 7);
    }
    
    return num >= 0 ? res : `-${res}`;
}





