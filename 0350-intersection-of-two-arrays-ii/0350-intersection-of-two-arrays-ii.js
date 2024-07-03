/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    let freq1 ={}
    let freq2 ={}

    let intersection =[];
    
    for (let num of nums1){
        if(freq1[num])
            freq1[num]++;
         else
            freq1[num] = 1;   
    }

    for (let num of nums2){
        if(freq2[num])
            freq2[num] ++;
         else
            freq2[num] = 1;   
    }



    for (let num of nums1){
        if(freq1[num] > 0 && freq2[num] >0){
            intersection.push(num);
            freq1[num]--;
            freq2[num]--;
        }
    }
         
          return intersection;
    
    };
 
