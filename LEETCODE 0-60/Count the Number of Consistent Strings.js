function countConsistentStrings(allowed, words) {
    let ara1 = allowed.split('');
    let len = words.length;
    let count = 0;
    let i = 0;

    while (i < len) {
        let ara2 = words[i].split('');
        let isConsistent = true;
        let j = 0;

        while (j < ara2.length) {
            if (!ara1.includes(ara2[j])) {
                isConsistent = false;
                break;
            }
            j++;
        }

        if (isConsistent) {
            count++;
        }

        i++;

    }

    return count;
}