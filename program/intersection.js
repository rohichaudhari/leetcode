// 349. Intersection of Two Arrays
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
var num1=[1,3,3,5,7];
        var num2=[3,3,5,7];
        let intersection=num1.filter((currentele)=>{
            return num2.includes(currentele);
        });
    console.log(intersection);
