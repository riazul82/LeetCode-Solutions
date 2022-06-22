function threeSumClosest(nums, target) {
    let i, j, k, sum, val;
    let min = null;
    let len = nums.length;

    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            for (k = j + 1; k < len; k++) {
                sum = nums[i] + nums[j] + nums[k];
                diff = Math.abs(sum - target);
                if (min === null || min > diff) {
                    min = diff;
                    val = sum;
                }
            }
        }
    }

    return val;
}