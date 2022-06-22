function numDifferentIntegers(word) {
    let i = 0, str = '';
    let set = new Set();

    while (i < word.length) {
        while (word[i] >= 0 && word[i] <= 9) {
            if ((str === '' || str === '0') && word[i] === '0') {
                str = '0';
                if (word[i + 1] >= 1 && word[i + 1] <= 9) {
                    str = '';
                }
            } else {
                str += word[i];
            }

            i++;
        }

        if (str !== '') {
            set.add(str);
            str = '';
        }

        i++;
    }

    return set.size;
}