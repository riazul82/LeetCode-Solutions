function trailingZeroes(n) {
    let counter = 0;

    while (n >= 5) {
        n = parseInt(n / 5);
        counter += n;
    }

    return counter;
}