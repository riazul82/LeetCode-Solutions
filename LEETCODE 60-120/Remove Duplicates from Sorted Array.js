function removeDuplicates(nums){
    let i = 0;
    
    while(i < nums.length){
        if(nums[i] === nums[i + 1]){
            for(let j = i; j < nums.length; j ++){
                nums[j] = nums[j + 1];
            }
            nums.length --;
            i --;
        }
        i ++;
    }
    
    return nums.length;
}