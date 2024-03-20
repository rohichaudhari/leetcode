// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
var findMedianSortedArrays = function(nums1, nums2) {
    let  arr=nums1.concat(nums2);
      arr.sort((a,b)=>(a-b));
      let n=arr.length;
      if(n%2===0){
          return((arr[n/2]+arr[n/2-1])/2);
      
      }
      else{
          return arr[Math.floor(n/2)];
      }
  };