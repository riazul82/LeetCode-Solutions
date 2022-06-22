function grayCode(n) {
    let len = Math.pow(2, n);
    let i, res = [];

    for (i = 0; i < len; i++) {
        res.push(i ^ (i >> 1));
    }

    return res;
}