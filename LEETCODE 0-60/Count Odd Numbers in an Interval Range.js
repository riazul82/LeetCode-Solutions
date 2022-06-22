function countOdds(low, high) {
    let res;

    if (low % 2 === 0 && high % 2 === 0) {
        res = Math.floor((high - low) / 2);
    } else {
        res = Math.floor((high - low) / 2) + 1;
    }

    return res;
}