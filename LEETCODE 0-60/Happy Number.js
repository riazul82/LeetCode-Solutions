function isHappy(n) {
    let i = 1;
    let x, sum;

    while (i < 1000) {
        sum = 0;

        while (n !== 0) {
            x = n % 10;
            sum += Math.pow(x, 2);
            n = parseInt(n / 10);
        }

        if (sum === 1) {
            return true;
        } else {
            n = sum;
        }

        i++;
    }

    return false;
}