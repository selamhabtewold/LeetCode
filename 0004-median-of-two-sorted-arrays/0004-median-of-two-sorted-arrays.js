/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {


    var array = nums1.concat(nums2);
    let len = array.length;
    let median;

    array.sort((a, b) => a - b);;

    if (len % 2 == 0) {

        let i = len / 2 - 1;
        median = (array[i] + array[i + 1]) / 2;


    } else {
        len = Math.floor(len / 2);
        median = array[len]
    }

    return median;

};