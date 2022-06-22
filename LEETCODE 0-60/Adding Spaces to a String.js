function addSpaces(s, spaces) {
    let i = 0;
    let str = s.slice(0, spaces[i]);

    while (i < spaces.length) {
        str += ' ' + s.slice(spaces[i], spaces[i + 1]);
        i++;
    }

    return str;
}