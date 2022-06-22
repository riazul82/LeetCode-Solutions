function numberOfSteps(num) {
    let count = 0;

    while (num) {
        if (num % 2) {
            num--;
        } else {
            num = parseInt(num / 2);
        }

        count++;

    }

    return count;
}