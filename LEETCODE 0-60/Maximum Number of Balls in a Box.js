function countBalls(lowLimit, highLimit) {
    let n = highLimit - lowLimit + 1;
    let i, num, sum, max = 0;
    let freq = [];

    let limit = 2 * n + 100;

    for (i = 1; i <= limit; i++) {
        freq[i] = 0;
    }

    for (i = lowLimit; i <= highLimit; i++) {
        num = i;
        sum = 0;
        while (num !== 0) {
            sum += (num % 10);
            num = parseInt(num / 10);
        }
        freq[sum]++;
    }

    for (i = 1; i <= limit; i++) {
        if (freq[i] > max) {
            max = freq[i];
        }
    }

    return max;
}