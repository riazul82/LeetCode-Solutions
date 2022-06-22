function isPowerOfFour(n) {
    if (n === 0) return false;
    while (n !== 1) {
        n = n / 4;
        if (parseInt(n) !== n) {
            return false;
        }
    }
    return true;
}