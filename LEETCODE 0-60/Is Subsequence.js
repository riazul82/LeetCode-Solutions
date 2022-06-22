function isSubsequence(s, t) {
    let i = 0;
    let j = 0;
    let isFound = false;

    while (i < s.length) {
        isFound = false;
        while (j < t.length) {
            if (s[i] === t[j]) {
                isFound = true;
                j++;
                break;
            }
            j++;
        }

        if (!isFound) {
            return false;
        }

        i++;
    }

    return true;
}