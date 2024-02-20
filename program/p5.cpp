// Given an integer n, return true if n is a perfect number, otherwise return false.
// Example 1:
// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:
// Input: num = 7
// Output: false
class Solution { 
public: 
    bool checkPerfectNumber(int num) { 
         if (num <= 0) { 
            return false; 
        } 
        int sum = 0; 
        for (int i = 1; i < num; i++) { 
            if (num % i == 0) { 
                sum += i; 
            } 
        } 
        return sum == num; 
    } 
};



 


 