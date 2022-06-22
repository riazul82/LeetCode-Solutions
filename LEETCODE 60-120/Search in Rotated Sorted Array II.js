function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        if (nums[left] === nums[mid]) {
            left++;
        } else if (nums[left] < nums[mid]) { // left part is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // right part is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
}