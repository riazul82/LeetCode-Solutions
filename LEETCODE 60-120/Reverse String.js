function reverseString(s) {
    let i = 0, temp;
    let j = s.length - 1;

    while (i <= j) {
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        i++;
        j--;
    }

    return s;
}