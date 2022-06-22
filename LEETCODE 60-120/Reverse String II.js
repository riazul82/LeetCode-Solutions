function reverseStr(s, k) {
    let arr = s.split('');
    let i, j, l, t;

    i = 0;

    while (i < s.length) {
        j = i;
        l = i + k - 1;
        while (j <= l) {
            t = arr[j];
            arr[j] = arr[l];
            arr[l] = t;

            j++;
            l--;
        }
        i += (2 * k);
    }

    return arr.join('');
}