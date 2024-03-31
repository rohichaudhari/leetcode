// Single Number
// Example 1:
// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
    let a= nums.sort((a,b)=>a-b);

    for(let i=0;i<a.length;i+=2){
        if(a[i]!==a[i+1])
           return a[i];  
    }
};