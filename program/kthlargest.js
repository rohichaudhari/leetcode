// Kth Largest Element in an Array
// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => a - b).reverse()[k - 1] ;
};