/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let len = nums.length;
    let num = [];
    
    for(let i=0 ; i<= len; i++ ){
        let complement = target - nums[i];
        for (let j= i+1; j<=len; j++){
            if(nums[j] == complement)
             num.push(i,j)
            
        }
        
    }
                 return num;

    
};