function canBeTypedWords(text, brokenLetters) {
    let words = text.split(" ");
    let i = 0, count = 0;

    while (i < words.length) {
        let word = words[i];
        let isBroken = false;
        let j = 0;

        while (j < brokenLetters.length) {
            let k = 0;

            while (k < word.length) {
                if (brokenLetters[j] === word[k]) {
                    isBroken = true;
                    break;
                }

                k++;
            }

            if (isBroken) {
                break;
            }

            j++;
        }

        if (isBroken === false) {
            count++;
        }

        i++;
    }

    return count;
}