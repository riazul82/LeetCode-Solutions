function singleNumber(nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    let i = 0;

    if (nums.length === 1) {
        return nums[i];
    }

    if (nums[i] !== nums[i + 1]) {
        return nums[i];
    }

    while (i < nums.length) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }

        i += 3;
    }
}