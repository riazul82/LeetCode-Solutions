function luckyNumbers(matrix) {
    let i, j, k;
    let min, colIndex;
    let isLucky = true;
    let result = [];

    for (i = 0; i < matrix.length; i++) {
        min = 999999;
        isLucky = true;

        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                colIndex = j;
            }
        }

        for (k = 0; k < matrix.length; k++) {
            if (matrix[k][colIndex] > min) {
                isLucky = false;
                break;
            }
        }

        if (isLucky) {
            result.push(min);
        }
    }

    return result;
}