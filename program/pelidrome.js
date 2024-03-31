// Palindrome Number
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {
    let palindrom = x.toString().split('').reverse().join('')
   let normal = x.toString()
  return (palindrom === normal)
};