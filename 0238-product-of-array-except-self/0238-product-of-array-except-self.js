/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
 

    const n = nums.length;
    const output = new Array(n);
    
    // Calculate left products
    const leftProducts = new Array(n);
    leftProducts[0] = 1;
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    
    // Calculate right products and multiply with left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] = leftProducts[i] * rightProduct;
        rightProduct *= nums[i];
    }
    
    return output;
};
