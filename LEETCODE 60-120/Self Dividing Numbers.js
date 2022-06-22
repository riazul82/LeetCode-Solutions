function selfDividingNumbers(left, right) {
    let n, isFound = true;
    let list = [];

    while (left <= right) {
        n = left;
        isFound = true;

        while (n !== 0) {
            let divisor = n % 10;
            if (left % divisor !== 0) {
                isFound = false;
                break;
            }
            n = parseInt(n / 10);
        }

        if (isFound) {
            list.push(left);
        }

        left++;
    }

    return list;
}