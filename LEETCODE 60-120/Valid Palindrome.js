function isPalindrome(s) {
    let str1 = s.replace(/[\W_]/g, '').toLowerCase();
    let str2 = str1.split('').reverse().join('');

    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}