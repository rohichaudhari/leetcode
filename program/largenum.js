// Largest Number
// Example 1:
// Input: nums = [10,2]
// Output: "210"

var largestNumber = function(nums) {
    let finalNums = nums.join("").split("").sort((x, y) => y - x);
     return  finalNums.join('');
};