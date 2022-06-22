function sortAra(a, b) {
    return a - b;
}

function uniqueOccurrences(arr) {
    arr.sort(sortAra);

    let i = 0, len = arr.length;
    let occurrence = [];
    let counter = 1;

    while (i < len) {
        console.log(arr[i], counter);
        if (arr[i] !== arr[i + 1]) {
            if (!occurrence.includes(counter)) {
                occurrence.push(counter);
                counter = 0;
            } else {
                return false;
            }
        }
        counter++;
        i++;
    }

    return true;
}