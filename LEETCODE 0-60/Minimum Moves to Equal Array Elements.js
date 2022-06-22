function minMoves(nums) {
    nums.sort((a, b) => a - b);
    let moves = 0;

    for (let num of nums) {
        moves += num - nums[0];
    }

    return moves;
}