// Divide Array Into Equal Pairs
// Input: nums = [3,2,3,2,2,2]
// Output: true
// Explanation: 
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
var divideArray = function(nums) {
    nums = nums.sort((a, b) => a - b)
   console.log(nums)
   for (let i = 0; i < nums.length - 1; i = i + 2) {
       if (nums[i] !== nums[i + 1]) return false
   }
   return true
};
