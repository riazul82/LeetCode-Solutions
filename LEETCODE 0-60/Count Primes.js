function countPrimes(n) {
    let arr = new Array(n).fill(true);
    arr[0] = arr[1] = false;

    for (let i = 2; i * i < n; i++) {
        for (let j = i * i; j < n; j += i) {
            arr[j] = false;
        }
    }

    return arr.filter((elem) => elem).length;
}