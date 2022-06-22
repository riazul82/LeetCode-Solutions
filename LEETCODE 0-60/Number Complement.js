function findComplement(num) {
    let i, x, n = num, sum = 0;
    let ara = [];

    while (n !== 0) {
        x = n % 2;

        if (x === 0) {
            ara.push(1);
        } else {
            ara.push(0);
        }

        n = parseInt(n / 2);
    }

    for (i = 0; i < ara.length; i++) {
        sum += ara[i] * Math.pow(2, i);
    }

    return sum;
}