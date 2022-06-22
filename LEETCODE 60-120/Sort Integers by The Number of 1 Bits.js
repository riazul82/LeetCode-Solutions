function sortAra(a, b) {
    let n1 = a;
    let n2 = b;
    
    let count1 = 0;
    let count2 = 0;
    
    while (n1 !== 0) {
        count1 += (n1 & 1);
        n1 = n1 >> 1;
    }

    while (n2 !== 0) {
        count2 += (n2 & 1);
        n2 = n2 >> 1;
    }

    if (count1 === count2) {
        return a - b;
    }

    return count1 - count2;
}

function sortByBits(arr) {
    arr.sort(sortAra);

    return arr;
}