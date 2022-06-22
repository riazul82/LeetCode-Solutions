function reverse(x) {
    let n = x;
    let rev = 0;

    while (n !== 0) {
        rev = (n % 10) + (rev * 10);
        n = parseInt(n / 10);
    }

    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
        return 0;
    }

    return rev;
}