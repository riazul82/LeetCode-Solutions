function singleNumber(nums) {
    if (nums.length === 2) {
        return nums;
    }

    nums.sort((a, b) => {
        return a - b;
    });

    let i = 0;
    let res = [];

    while (i < nums.length) {
        if (nums[i] !== nums[i + 1]) {
            res.push(nums[i]);
            i--;
        }

        i += 2;
    }

    return res;
}