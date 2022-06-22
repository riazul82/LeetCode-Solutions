function sortAra(a, b) {
    return a - b;
}

function fourSum(nums, target) {
    nums.sort(sortAra);
    let i, j, l, r;
    let len = nums.length;
    let res = [];

    for (i = 0; i < len - 3; i++) {
        for (j = i + 1; j < len - 2; j++) {
            l = j + 1;
            r = len - 1;
            while (l < r) {
                if (nums[i] + nums[j] + nums[l] + nums[r] === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (nums[l] === nums[l + 1]) l++;
                    while (nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (nums[i] + nums[j] + nums[l] + nums[r] < target) {
                    l++;
                } else {
                    r--;
                }
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;
    }

    return res;
}