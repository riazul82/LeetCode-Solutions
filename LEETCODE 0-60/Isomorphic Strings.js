function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let map = new Map();

    let i = 0;
    let ara = [];

    while (i < s.length) {
        if (!map.has(s[i])) {
            map.set(s[i], t[i]);
            let j = 0;
            while (j < ara.length) {
                if (ara[j] === t[i]) {
                    return false;
                }
                j++;
            }
            ara.push(t[i]);
        }
        i++;
    }

    i = 0;

    while (i < s.length) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        }

        i++;
    }

    return true;
}