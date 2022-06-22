function majorityElement(nums) {
    nums.sort();
    let len = nums.length;
    let counter = 1, max = 0, elem;

    for (let i = 0; i < len; i++) {
        counter = 1;
        while (nums[i] === nums[i + 1]) {
            counter++;
            i++;
        }

        if (counter > max) {
            max = counter;
            elem = nums[i];
        }

    }

    return elem;
}