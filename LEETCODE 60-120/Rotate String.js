function rotateString(s, goal) {
    let arr = s.split('');
    let len = s.length;
    let i, j, t, str;

    i = 0;

    while (i < len) {
        t = arr[len - 1];
        j = len - 1;

        while (j >= 0) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[0] = t;
        str = arr.join('');

        if (str === goal) {
            return true;
        }

        i++;
    }

    return false;
}