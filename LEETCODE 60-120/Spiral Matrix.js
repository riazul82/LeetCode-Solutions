function spiralOrder(matrix) {
    let top, bottom, left, right;
    let i, dir, res = [];

    top = 0;
    bottom = matrix.length - 1;
    left = 0;
    right = matrix[0].length - 1;

    dir = 0;

    while (top <= bottom && left <= right) {
        if (dir === 0) {
            for (i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }

            top++;
        } else if (dir === 1) {
            for (i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }

            right--;
        } else if (dir === 2) {
            for (i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }

            bottom--;
        } else if (dir === 3) {
            for (i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }

            left++;
        }

        dir = (dir + 1) % 4;
    }

    return res;
}