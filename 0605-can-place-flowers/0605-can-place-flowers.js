/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    if (n === 0) return true;

    for (let i = 0; i < flowerbed.length; i++) {

        if (flowerbed[i] == 0) {
            /** previous value is null(out of bound) if start index spot is empty
                 if i = 0 (first index) and  flowerbed[i] == 0, we set the prev value true
                 meaning, there is a possibility to plant the flower there, 
                 or if i is not starting index, prev value is checked by accessing i-1 position
             */
            let prev = (i === 0 || flowerbed[i - 1] === 0);

            /** next value is null(out of bound) if last spot of the array is empty
                i= flowerbed.length -1 and flowerbed[i]==0,
                if next is not the last spot, we have to check the i+1 position if it is empty or not
             */
            let next = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            if (prev && next) {
                flowerbed[i] = 1;
                n--;
                if (n === 0) return true
            }

        }

    }
    return n === 0;
};