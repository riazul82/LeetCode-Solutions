function fact(num) {
    let n = 1;
    while (num != 0) {
        n = n * num;
        num--;
    }
    return n;
}

function generate(numRows) {
    let subAra = [];
    let triangle = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < i + 1; j++) {
            let x = (fact(i)) / (fact(j) * fact(i - j));
            subAra.push(x);
        }
        triangle.push(subAra);
        subAra = [];
    }

    return triangle;
}