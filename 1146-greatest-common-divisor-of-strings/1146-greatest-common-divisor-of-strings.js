/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    let gcdLength = gcd(str1.length, str2.length);
    
   
    let gcdString = str1.substring(0, gcdLength);
    
    return gcdString;
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
      
    }
    return a;
}
