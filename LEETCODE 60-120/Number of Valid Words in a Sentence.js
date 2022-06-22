function countValidWords(sentense) {
    let ara = sentense.split(' ');
    let words = [];
    let word, wordLen;
    let i = 0, j = 0;
    let count = 0; // Valid Word Counter
    let hCount = 0; // Hyphen Counter
    let isWord = true;

    while (i < ara.length) {
        if (ara[i] !== '-' && ara[i] !== ' ' && ara[i] !== '') {
            words.push(ara[i]);
        }
        i++;
    }

    i = 0;
    len = words.length;

    while (i < len) {
        word = words[i];
        wordLen = word.length;
        hCount = 0;
        isWord = true;

        j = 0;
        while (j < wordLen) {
            if ((word[j] === '!' || word[j] === ',' || word[j] === '.') && j !== wordLen - 1) {
                isWord = false;
                break;
            } else if (word[j] === '-') {
                hCount++;
                if (j === 0 || j === wordLen - 1 || hCount > 1 || word[j + 1] === '!' || word[j + 1] === ',' || word[j + 1] === '.') {
                    isWord = false;
                    break;
                }
            } else if (word[j] >= 0 && word[j] <= 9) {
                isWord = false;
                break;
            }

            j++;
        }

        if (isWord === true) {
            count++;
        }

        i++;
    }

    return count;
}