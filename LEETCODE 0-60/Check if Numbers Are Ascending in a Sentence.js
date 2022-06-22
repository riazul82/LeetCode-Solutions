function areNumbersAscending(s) {
    let arr = s.split(" ");
    let i = 1, prevNum = arr[0];

    while (i < arr.length) {
        if (arr[i] > 0) {
            let num = Number(arr[i]);
            if (num <= prevNum) {
                return false;
            }
            prevNum = num;
        }

        i++;
    }

    return true;
}