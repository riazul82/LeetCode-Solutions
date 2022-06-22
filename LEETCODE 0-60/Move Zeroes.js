function moveZeroes(nums) {
    let i, j;
    let len = nums.length;

    for (i = 0; i < len; i++) {
        if (nums[i] === 0) {
            for (j = i; j < len - 1; j++) {
                nums[j] = nums[j + 1];
            }
            nums[len - 1] = 0;
            len --;
            i --;
        }
    }

    return nums;
}