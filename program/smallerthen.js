// 1365. How Many Numbers Are Smaller Than the Current Number
// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

var smallerNumbersThanCurrent = function(nums) {
    var result=[];
    for(var i=0;i<nums.lenght;i++){
         var count=0;
    for( var j=0; j<nums.lenght;j++){
        if(nums[i]>nums[j]){
        count=count+1;

        }
    }
    result.push(count);
    }
    return result;
   
};