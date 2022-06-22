function strStr(haystack, needle) {
    if (needle === "") {
        return 0;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let k = i;
            let isMached = true;

            for (let j = 0; j < needle.length; j++) {
                if (haystack[k] !== needle[j]) {
                    isMached = false;
                    break;
                }
                k++;
            }

            if (isMached === true) {
                return i;
            }
        }
    }

    return -1;
}