/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    let bool = [];
    let maxCandies = Math.max(...candies);
   

    for (let i = 0; i < candies.length; i++) {
        let candy = candies[i] + extraCandies;
        bool.push(candy >= maxCandies)
    }

    return bool;
};