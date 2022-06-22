function smallerNumbersThanCurrent(nums) {
    let i, j, count;
    let ans = [];

    for (i = 0; i < nums.length; i++) {
        count = 0;
        for (j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        ans.push(count);
    }

    return ans;
}