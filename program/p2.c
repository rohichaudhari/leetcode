// Given  signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Input: x = 123
// Output: 321
// Input: x = -123
// Output: -321
// Input: x = 120
// Output: 21
 
#include <stdio.h>
#include<conio.h>
int main() {

  int n, reverse = 0, remainder;

  printf("Enter n integer number: ");
  scanf("%d", &n);

  while (n != 0) {
    remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n /= 10;
  }

  printf("Reversed number = %d", reverse);

  return 0;
}