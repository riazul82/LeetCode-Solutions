function searchMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
            let left = 0;
            let right = matrix[i].length - 1;

            while (left <= right) {
                let mid = Math.round(left + (right - left) / 2);

                if (matrix[i][mid] === target) {
                    return true;
                }

                if (target > matrix[i][mid]) {
                    left = left + 1;
                } else {
                    right = right - 1;
                }
            }
        }
    }

    return false;
}