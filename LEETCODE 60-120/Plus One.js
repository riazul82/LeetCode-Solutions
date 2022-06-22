function plusOne(digits) {
    let len = digits.length - 1;

    while (len >= 0) {
        digits[len]++;
        if (digits[len] === 10) {
            digits[len] = 0;
            len--;
        } else {
            return digits;
        }
    }

    return [1, ...digits];
}