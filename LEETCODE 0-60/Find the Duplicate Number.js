function sortAra(a, b) {
    return a - b;
}

function findDuplicate(nums) {
    let i, len = nums.length;

    nums.sort(sortAra);

    for (i = 0; i < len; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
}