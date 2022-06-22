function sortAra(a, b) {
    return a - b;
}

function missingNumber(nums) {
    let i;
    nums.sort(sortAra);
    
    for (i = 0; i < nums.length; i++) {
        if (i !== nums[i]) {
            return i;
        }
    }

    return i;
}