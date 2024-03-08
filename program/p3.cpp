// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.
// Input: n = 34, k = 6
// Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
class Solution {
public:
    int sumBase(int n, int k) {
        int s=0;
        while(n)
        {
            s+=n%k;
            n/=k;
        }
        return s;
    }
};