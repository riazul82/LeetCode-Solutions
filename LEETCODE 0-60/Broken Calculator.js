function brokenCalc(startValue, target) {
    let counter = 0;

    while (target > startValue) {
        counter++;

        if (target % 2) {
            target++;
        } else {
            target = target / 2;
        }
    }

    return counter + startValue - target;
}