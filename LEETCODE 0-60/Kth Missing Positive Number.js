function findKthPositive(arr, k) {
    let missingNums = [];
    let len = arr.length;
    let i = 0, j = 1;

    while (i < len) {
        if (arr[i] > j) {
            missingNums.push(j);
        } else {
            i++;
        }

        j++;
    }

    len = missingNums.length;

    if (len < k) {
        i = k;
        while (i > 0) {
            missingNums.push(j);
            i--;
            j++;
        }
    }

    return missingNums[k - 1];
}