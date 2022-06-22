function numEquivDominoPairs(dominoes) {
    let count = 0;
    let i, j;

    for (i = 0; i < dominoes.length; i++) {
        for (j = i + 1; j < dominoes.length; j++) {
            if (dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1]) {
                count++;
            } else if (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0]) {
                count++
            }
        }
    }

    return count;
}