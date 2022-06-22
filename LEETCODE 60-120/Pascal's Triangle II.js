function fibo(n) {
    let x = 1;

    while (n !== 0) {
        x *= n;
        n--;
    }

    return x;
}

function getRow(rowIndex) {
    let ara = [];
    let res, i;

    for (i = 0; i <= rowIndex; i++) {
        res = fibo(rowIndex) / (fibo(i) * fibo(rowIndex - i));
        ara.push(res);
    }

    return ara;
}