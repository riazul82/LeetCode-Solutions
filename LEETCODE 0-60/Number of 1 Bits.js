function hammingWeight(n) {
    if (n === 0) {
        return 0;
    } else {
        return (n >>> 0).toString(2).match(/1/g)?.length;
    }
}