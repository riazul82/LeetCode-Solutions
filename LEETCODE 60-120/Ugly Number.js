function isUgly(n) {
    if (n === 0) {
        return false;
    }

    while (n !== 1) {
        if (n % 2 === 0) {
            n = parseInt(n / 2);
        } else if (n % 3 === 0) {
            n = parseInt(n / 3);
        } else if (n % 5 === 0) {
            n = parseInt(n / 5);
        } else {
            return false;
        }
    }

    return true;
}