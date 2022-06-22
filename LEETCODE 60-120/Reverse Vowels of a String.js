function reverseVowels(s) {
    let strAra = s.split('');
    let vowels = [];
    let index = [];
    let i, j, str;

    i = 0;

    while (i < s.length) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
            vowels.push(strAra[i]);
            index.push(i);
        }

        i++;
    }

    vowels.reverse();

    i = 0;
    j = 0;

    while (i < strAra.length) {
        if (index[j] === i) {
            strAra[i] = vowels[j];
            j++;
        }

        i++;
    }

    str = strAra.join('');

    return str;
}