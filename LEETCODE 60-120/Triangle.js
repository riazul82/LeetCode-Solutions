function minimumTotal(triangle) {
    let i, j, len1, len2, minVal;

    len1 = triangle.length - 1;

    for (i = len1 - 1; i >= 0; i--) {

        len2 = triangle[i].length - 1;

        for (j = 0; j <= len2; j++) {
            minVal = Math.min(triangle[i][j] + triangle[i + 1][j], triangle[i][j] + triangle[i + 1][j + 1]);
            triangle[i][j] = minVal;
        }

    }

    return triangle[0][0];
}