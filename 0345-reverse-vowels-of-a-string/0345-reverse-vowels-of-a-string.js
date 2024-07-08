/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    let str = s.split('');
    let vowels =['a','e', 'i', 'o','u','A','E','I','O','U'];
    let left=0;
    let right = str.length - 1;


    while(left < right){

        while(left < right && !vowels.includes(str[left])){
            left ++;
        }
          while(left < right && !vowels.includes(str[right])){
            right --;
        }

    if(left < right){

        let temp = str[left];
        str[left] = str[right];
        str[right]= temp;

        left ++;
        right --;
    }

    }
return str.join('');
   
    
};