function countKDifference(nums, k) {
    let i, j;
    let count = 0;

    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                count++;
            }
        }
    }

    return count;
}