function findNumbers(nums) {
    let i = 0;
    let digits, count = 0;

    while (i < nums.length) {
        digits = Math.floor(Math.log10(nums[i]) + 1);

        if (!(digits % 2)) {
            count++;
        }

        i++;
    }

    return count;
}