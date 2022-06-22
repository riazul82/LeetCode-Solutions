function countBits(n) {
    let ara = [];

    for (let i = 0; i <= n; i++) {
        let x = i;
        let count = 0;
        while (x !== 0) {
            if (x % 2 === 1) {
                count++;
            }
            x = parseInt(x / 2);
        }
        ara.push(count);
    }

    return ara;
}