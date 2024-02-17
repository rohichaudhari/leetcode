// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
#include <stdio.h>

int main() {
    int base = 2;
    int n = 8;
    
    int result = 1.0;
    for (int i = 0; i < n; ++i) {
        result *= base;
    }
    
    printf("%d raised to the power %d is: %d\n", base, n, result);

    return 0;
}
    
