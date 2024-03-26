// Sort By
// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
var sortBy = function(arr, fn) {
    //  return arr.sort((a, b) => fn(a) - fn(b));
    arr.sort((a, b) => {
        return fn(a) - fn(b);
    });
    return arr;
};
