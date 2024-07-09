/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    // let istrue = false;

    // for (let i = 0; i < nums.length - 2; i++) {

    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         if (nums[i] < nums[j]) {
    //             for (let k = j + 1; k < nums.length; k++) {
    //                 if (nums[j] < nums[k]) {
    //                     istrue = true;
    //                     return istrue;
    //                 } else {
    //                     istrue = false;

    //                 }
    //             }
    //         } else {
    //             istrue = false;
    //         }
    //     }



    // }
    // return istrue;


    let smallest = Infinity;
    let smaller = Infinity;

    

    for (let num of nums) {
        if (num <= smallest) {
            smallest = num
        }
        else if (num <= smaller) {
            smaller = num
        }
        else {
            return true;
        }
    }

    return false;
};