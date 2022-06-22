function generateMatrix(n) {
    // create 3x3 null matrix
    let res = new Array(n).fill(null).map(() => new Array(n).fill(null));

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    let i, k, dir;

    k = 1;
    dir = 0;

    while (top <= bottom && left <= right) {
        if (dir === 0) {            // left to right
            for (i = left; i <= right; i++) {
                res[top][i] = k++;
            }
            top++;
        } else if (dir === 1) {     // top to bottom
            for (i = top; i <= bottom; i++) {
                res[i][right] = k++;
            }
            right--;
        } else if (dir === 2) {     // right to left
            for (i = right; i >= left; i--) {
                res[bottom][i] = k++;
            }
            bottom--;
        } else if (dir === 3) {     // bottom to top
            for (i = bottom; i >= top; i--) {
                res[i][left] = k++;
            }
            left++;
        }

        dir = (dir + 1) % 4;
    }

    return res;
}