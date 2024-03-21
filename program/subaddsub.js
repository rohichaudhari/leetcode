//1281. Subtract the Product and Sum of Digits of an Integer
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
var subtractProductAndSum = function(n) {
    let nArray=n.toString().split('');
    let sum=0;
    let product=1;
    for(let i=0;i<nArray.length;i++){
        sum+=parseInt(nArray[i]);
        product*=parseInt(nArray[i]);
        console.log('sum,product',sum,product);
    }
    return product-sum;
};
