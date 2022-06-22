function sortAra(a, b) {
    return a - b; 
}

function thirdMax(nums) {
    nums.sort(sortAra);

    let len = nums.length - 1;
    let thirdMax = nums[len];
    let count = 1;

    while (len >= 0) {
        if ((nums[len] < thirdMax && nums[len] > nums[len - 1])) {
            thirdMax = nums[len - 1];
            count++;
            if (count === 2) {
                return thirdMax;
            }
        }

        len--;
    }

    return thirdMax;
}