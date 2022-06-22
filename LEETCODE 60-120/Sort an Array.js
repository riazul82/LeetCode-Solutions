function merge(ara1, ara2) {
    let i = 0;
    let j = 0;
    let temp = [];

    while (i < ara1.length && j < ara2.length) {
        if (ara1[i] > ara2[j]) {
            temp.push(ara2[j]);
            j++;
        } else {
            temp.push(ara1[i]);
            i++;
        }
    }

    while (i < ara1.length) {
        temp.push(ara1[i]);
        i++;
    }

    while (j < ara2.length) {
        temp.push(ara2[j]);
        j++;
    }

    return temp;
}

function mergeSort(ara) {
    if (ara.length <= 1) {
        return ara;
    }

    let mid = Math.floor(ara.length / 2);
    let left = mergeSort(ara.slice(0, mid));
    let right = mergeSort(ara.slice(mid));

    return merge(left, right);
}

function sortArray(nums) {
    return mergeSort(nums);
}