// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.
// Example 1:
// Input: num = 4
// Output: 2
// Explanation:
// The only integers less than or equal to 4 whose digit sums are even are 2 and 4.    

 class Solution {
public:
    int countEven(int num) {
        int sum=0,tmp=num;
        while(num){
            sum+=num%10;
            num/=10;
        }
        return(tmp-sum%2)/2;
    }
};

