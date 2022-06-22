function isPowerOfThree(n) {
    if (n === 0) return false;

    while (n !== 1) {
        n = n / 3;
        if (parseInt(n) !== n) {
            return false;
        }
    }
    
    return true;
}