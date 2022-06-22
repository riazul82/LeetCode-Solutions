function climbStairs(n) {
    let a = 1, b = 0, c = 0;
    let i = 0;

    while (i < n) {
        c = a + b;
        b = a;
        a = c;

        i++;
    }

    return c;
}