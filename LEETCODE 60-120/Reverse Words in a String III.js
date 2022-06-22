function reverseWords(s) {
    let words = s.split(" ");
    let i, j, k, t;

    i = 0;

    while (i < words.length) {
        let ara = words[i].split('');

        j = 0;
        k = ara.length - 1;

        while (j <= k) {
            t = ara[j];
            ara[j] = ara[k];
            ara[k] = t;

            j++;
            k--;
        }

        words[i] = ara.join('');

        i++;
    }

    return words.join(" ");
}