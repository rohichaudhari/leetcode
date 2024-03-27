// Fraction to Recurring Decimal
// Example 1:
// Input: numerator = 1, denominator = 2
// Output: "0.5"

// var fractionToDecimal = function(numerator, denominator) {
//     let c=numerator/ denominator;
//     let d=c.toString();
//     return d;
//  };
function decimal(a,b){
    // a.tostring();
    // b.tostring(b);
    let c=a/b;
    console.log(c);
   let d=c.toString();
   console.log(typeof(d))
    
}
decimal(1,2);