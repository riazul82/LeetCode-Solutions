function countAndSay(n) {
    let i, k;
    let str, res, count;

    if (n === 1) {
        return '1';
    }

    str = '1';
    res = '';
    i = 1;

    while (i < n) {
        count = 1;
        k = 0;

        while (k < str.length) {
            if (str[k] !== str[k + 1]) {
                res += count + str[k];
                count = 0;
            }
            count++;
            k++;
        }

        str = res;
        res = '';

        i++;
    }

    return str;
}