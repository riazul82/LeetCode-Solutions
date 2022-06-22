function sortAra(a, b) {
    return a - b;
}

function kidsWithCandies(candies, extraCandies) {
    let ara = [...candies];
    ara.sort(sortAra);
    let len = candies.length - 1;
    let result = [];

    for (let i = 0; i <= len; i++) {
        if (candies[i] + extraCandies >= ara[len]) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
}