/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let trimmedStr = s.split(/\s+/);


    let result = [];


    for(let i = trimmedStr.length-1; i>=0; i--){
        result.push(trimmedStr[i])
    }


    return result.join(' ').trim();


    
};