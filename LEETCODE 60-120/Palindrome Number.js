function isPalindrome(num) {
    let x = num;

    if (x < 0) {
        return false;
    }

    let res = 0;

    while (x != 0) {
        res = res * 10 + x % 10;
        x /= 10;
        x = parseInt(x);
    }

    if (res === num) {
        return true;
    } else {
        return false;
    }

}