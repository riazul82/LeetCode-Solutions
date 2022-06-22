function sortAra(a, b) {
    return a - b;
}

function heightChecker(heights) {
    let expected = [...heights];
    expected.sort(sortAra);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (expected[i] !== heights[i]) {
            count++;
        }
    }

    return count;
}