function singleNumber(nums) {
    nums.sort();
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] !== nums[i + 1]) {
            if (i === 0) {
                return nums[i];
            }
            if (i !== 0 && nums[i] !== nums[i - 1]) {
                return nums[i];
            }
        }
        i++;
    }
}