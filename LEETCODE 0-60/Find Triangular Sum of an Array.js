function triangularSum(nums) {

    while (nums.length > 1) {
        nums = nums.map((elem, index, arr) => {
            return (elem + arr[index + 1]) % 10;
        });
        nums.length--;
    }

    return nums[0];
}