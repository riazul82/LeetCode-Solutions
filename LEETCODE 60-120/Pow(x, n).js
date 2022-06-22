function myPow(x, n) {
    let pow = n;

    if (pow < 0) {
        pow = pow * (-1);
        x = 1 / x;
    }

    if (pow === 0) {
        return 1;
    }

    let divide = myPow(x, Math.floor(pow / 2));

    if (pow % 2 === 0) {
        return divide * divide;
    } else {
        return x * divide * divide;
    }
}