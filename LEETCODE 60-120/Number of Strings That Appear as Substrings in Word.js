function numOfStrings(patterns, word) {
    let i, j, k;
    let count = 0;
    let str, isSubstr;

    i = 0;

    while (i < patterns.length) {
        str = patterns[i];
        isSubstr = false;
        j = 0;

        while (j < word.length) {
            if (str[0] === word[j]) {
                isSubstr = true;
                k = 0;

                while (k < str.length) {
                    if (str[k] !== word[j + k]) {
                        isSubstr = false;
                        break;
                    }
                    k++;
                }
            }

            if (isSubstr) {
                count++;
                break;
            }

            j++;

        }

        i++;
    }

    return count;
}