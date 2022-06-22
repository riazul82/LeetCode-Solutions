function canJump(nums) {
    let jumped = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > jumped) {
            return false;
        }

        if (jumped < i + nums[i]) {
            jumped = i + nums[i];
        }
    }

    return true;
}