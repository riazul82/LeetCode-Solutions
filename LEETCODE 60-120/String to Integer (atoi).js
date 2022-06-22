function myAtoi(s) {
    s = s.trim();
    let str = '';
    let i = 0;

    if (s[0] === '+' || s[0] === '-') {
        str += s[0];
        i++;
    }

    while ((s[i] >= 0 && s[i] <= 9) && s[i] !== ' ') {
        str += s[i];
        i++;
    }

    if (str === '+' || str === '-' || str === '') {
        return 0;
    } else {
        let num = parseInt(str);

        if (num > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        } else if (num < Math.pow(2, 31) * (-1)) {
            return Math.pow(2, 31) * (-1);
        } else {
            return num;
        }
    }
}