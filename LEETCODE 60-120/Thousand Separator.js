function thousandSeparator(n) {
    let str = n.toString();
    let x = '';

    while (str !== '') {
        if (str.length < 4) {
            str = str + x;
            return str;
        } else {
            x = '.' + str.slice(-3) + x;
        }

        str = str.slice(0, -3);
    }
}