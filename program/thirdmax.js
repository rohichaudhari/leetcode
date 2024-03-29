// Third Maximum Number
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
var thirdMax = function(nums) {
    const array=[...new Set(nums)]
const array2=array.sort((a,b)=>b-a)
console.log(array2)
for(i=0;i<array2.length;i++){
    if(array2.length==2){
        return array2[0]
    }
    if(array2.length==1){
        return array2[0]
    }
    if(array2.length>=3){
        return array2[2]
    }
}
};