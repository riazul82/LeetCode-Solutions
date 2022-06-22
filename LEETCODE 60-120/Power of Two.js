function isPowerOfTwo(n) {
    let pow = Math.log2(n);
    if (parseInt(pow) === pow) {
        return true;
    }
    return false;
}