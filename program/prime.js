// Count Primes
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
var countPrimes = function(n) {
    const arr=[];
    const isPrime=num=>{
        for(let i=0;i<arr.length && arr[i]<=Math.sqrt(num);i++){
            if(num%arr[i]===0){
                return false;
            }
        }
        return true;
    }
    for(let i=2;i<n;i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr.length;
};