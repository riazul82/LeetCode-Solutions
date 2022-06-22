function addDigits(num) {
    while (true) {
        let sum = 0;

        while (num !== 0) {
            sum += (num % 10);
            num = parseInt(num / 10);
        }

        if (sum < 10) {
            return sum;
        }

        num = sum;
    }
}