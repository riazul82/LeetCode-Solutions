function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 2]) {
            for (let j = i + 2; j < nums.length; j++) {
                nums[j - 1] = nums[j];
            }
            i--;
            nums.length--;
        }
    }

    return nums.length;
}