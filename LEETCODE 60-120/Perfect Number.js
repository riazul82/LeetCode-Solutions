function checkPerfectNumber(num) {
    let n = num;

    if (n === 1) {
        return false;
    }

    let i = 2;
    let sum = 1;

    while (i * i <= n) {
        if (n % i === 0) {
            if (i * i < n) {
                sum += (i + (n / i));
            } else {
                sum += i;
            }
        }
        i++;
    }

    if (sum === num) {
        return true;
    } else {
        return false;
    }
}