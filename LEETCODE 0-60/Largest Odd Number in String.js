function largestOddNumber(num) {
    let len = num.length - 1;
    let max = 0;

    while (len >= 0) {
        if (num[len] % 2 && num > max) {
            return num.slice(0, len + 1);
        }
        len--;
    }

    return "";
}