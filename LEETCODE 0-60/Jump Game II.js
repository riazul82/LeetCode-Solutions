function jump(nums) {
    let minJump = 0;
    let l = 0;
    let r = 0;

    while (r < nums.length - 1) {
        jumpable = 0;

        while (l < r + 1) {
            jumpable = Math.max(jumpable, l + nums[l]);
            l++;
        }

        l = r + 1;
        r = jumpable;
        minJump++;
    }

    return minJump;
}