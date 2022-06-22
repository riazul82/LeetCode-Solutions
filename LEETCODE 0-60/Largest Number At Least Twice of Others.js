function sortAra(a, b) {
    return a - b;
}

function dominantIndex(nums) {
    let ara = [...nums];
    nums.sort(sortAra);

    let len = nums.length - 1;

    if (len === 0) {
        return 0;
    }

    if (nums[len - 1] * 2 <= nums[len]) {
        return ara.indexOf(nums[len]);
    } else {
        return -1;
    }
}