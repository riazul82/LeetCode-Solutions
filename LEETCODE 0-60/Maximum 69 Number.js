function maximum69Number(num) {
    let n = num;
    let max = n;
    let ara = [];

    while (n !== 0) {
        let x = n % 10;
        ara.push(x);
        n = parseInt(n / 10);
    }

    ara.reverse();

    for (let i = 0; i < ara.length; i++) {
        let tempAra = [...ara];
        if (tempAra[i] === 9) {
            tempAra[i] = 6;
        } else {
            tempAra[i] = 9;
        }

        let newNum = 0;

        for (let j = 0; j < tempAra.length; j++) {
            newNum = (newNum * 10) + tempAra[j];
        }

        if (newNum > max) {
            max = newNum;
        }
    }

    return max;
}