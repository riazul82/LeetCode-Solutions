function toLowerCase(s) {
    let arr = s.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 'A' && arr[i] <= 'Z') {
            arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 32);
        }
    }

    return arr.join('');
}