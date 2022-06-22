function maxNumberOfBalloons(text) {
    let textAra = text.split('');
    let b, a, l, o, n;
    let count = 0;

    while (true) {
        b = textAra.indexOf('b');
        a = textAra.indexOf('a');
        l = textAra.indexOf('l');
        o = textAra.indexOf('o');

        if (l !== -1) {
            textAra[l] = 0;
        }

        if (o !== -1) {
            textAra[o] = 0;
        }

        l = textAra.indexOf('l');
        o = textAra.indexOf('o');
        n = textAra.indexOf('n');

        if (b === -1 || a === -1 || l === -1 || o === -1 || n === -1) {
            return count;
        } else {
            textAra[b] = 0;
            textAra[a] = 0;
            textAra[l] = 0;
            textAra[o] = 0;
            textAra[n] = 0;

            count++;
        }
    }
}