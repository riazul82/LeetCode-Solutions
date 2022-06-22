function areOccurrencesEqual(s) {
    s = s.split('').sort().join('');
    let count = 0, prevCount = null;
    let i = 0;

    while (i < s.length) {
        if (s[i] !== s[i + 1]) {
            if (prevCount !== count && prevCount !== null) {
                return false;
            }
            prevCount = count;
            count = 0;
        } else {
            count++;
        }

        i++;
    }

    return true;
}