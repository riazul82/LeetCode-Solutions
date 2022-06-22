function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    if (nums[right] < target) {
        return right + 1;
    } else if (nums[right] === target) {
        return right;
    }

    if (nums[left] >= target) {
        return 0;
    }

    while (left !== right) {
        let mid = parseInt((left + right) / 2);

        if (mid === 0) {
            return 1;
        }

        if (nums[mid] >= target && nums[mid - 1] < target) {
            return mid;
        } else if (nums[mid] < target && nums[mid + 1] >= target) {
            return mid + 1;
        }

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}