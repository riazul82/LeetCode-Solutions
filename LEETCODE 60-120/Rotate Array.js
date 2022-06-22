function rotate(nums, k) {
    k = k % nums.length;
    let rotateItems = nums.splice(nums.length - k, k);
    nums.unshift(...rotateItems);
}