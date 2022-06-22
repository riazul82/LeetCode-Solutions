function sortColors(nums) {
    let pt, low, high;

    pt = 0;
    low = 0;
    high = nums.length - 1;

    while (pt <= high) {
        if (nums[pt] === 0) {
            [nums[pt], nums[low]] = [nums[low], nums[pt]];
            low++;
        } else if (nums[pt] === 2) {
            [nums[pt], nums[high]] = [nums[high], nums[pt]];
            high--;
            pt--;
        }
        pt++;
    }
}