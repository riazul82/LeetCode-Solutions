function numMatchingSubseq(s, words) {
    let i = 0;
    let count = 0;

    while (i < words.length) {
        let word = words[i];
        let str = s;
        let isSubSeq = true;
        let j = 0;

        while (j < word.length) {
            let index = str.indexOf(word[j]);

            if (index === -1) {
                isSubSeq = false;
                break;
            }

            str = str.slice(index + 1);
            j++;
        }

        if (isSubSeq) {
            count++;
        }

        i++;
    }

    return count;
}