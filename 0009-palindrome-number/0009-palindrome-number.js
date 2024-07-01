/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
   if (x < 0) return false;

    let input = x;
    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return reversed === input;  
};