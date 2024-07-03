/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {

    let arr =nums.sort((a, b) => a - b);
    let len = arr.length;

    if (len <= 4) 
        return 0;
    
    return Math.min(
        arr[len - 1] - arr[3],
        arr[len - 2] - arr[2],
        arr[len - 3] - arr[1],
        arr[len - 4] - arr[0]
    );



};