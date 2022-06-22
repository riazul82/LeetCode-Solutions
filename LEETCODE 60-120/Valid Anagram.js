function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let fStr = s.split('').sort().join('');
    let lStr = t.split('').sort().join('');

    if (fStr === lStr) {
        return true;
    } else {
        return false;
    }
}