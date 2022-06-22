function countGoodRectangles(rectangles) {
    let i = 0;
    let count = 0;
    let maxLen = 0;
    let len, rec;

    while (i < rectangles.length) {
        rec = rectangles[i];

        if (rec[0] > rec[1]) {
            len = rec[1];
        } else {
            len = rec[0];
        }

        if (len > maxLen) {
            maxLen = len;
            count = 0;
        }

        if (len === maxLen) {
            count++;
        }

        i ++;
    }

    return count;
}