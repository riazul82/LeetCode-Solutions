function guessNumber(n) {
    let low = 0;
    let high = n;
    let mid;

    while (low <= high) {
        mid = parseInt(((high - low) / 2) + low);

        if (guess(mid) === 0) {
            return mid;
        }

        if (guess(mid) === -1) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}