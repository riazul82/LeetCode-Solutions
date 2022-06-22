function tribonacci(n) {
    let a = 0, b = 1, c = 1;
    let sum = 0;

    if (n === 1 || n === 2) {
        return 1;
    }

    let i = 3;

    while (i <= n) {
        sum = a + b + c;
        a = b;
        b = c;
        c = sum;

        i++;
    }

    return sum;
}