function largestNumber(nums) {
    nums.sort((a, b) => {
        let str1 = a + '' + b;
        let str2 = b + '' + a;

        return str2 - str1;
    })

    let largeNum = '';

    for (let i = 0; i < nums.length; i++) {
        largeNum += nums[i];
    }

    if (largeNum == 0) {
        return '0';
    }

    return largeNum;
}