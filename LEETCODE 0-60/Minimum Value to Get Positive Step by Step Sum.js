function minStartValue(nums) {
    for (let i = 1; i < 10001; i++) {
        let totalCounter = i;
        let isValid = true;
        
        for (let j = 0; j < nums.length; j++) {
            totalCounter += nums[j];
            if (totalCounter < 1) {
                isValid = false;
                break;
            }
        }

        if (isValid === true) {
            return i;
        }
    }
}