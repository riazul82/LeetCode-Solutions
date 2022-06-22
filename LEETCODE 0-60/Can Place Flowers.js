function canPlaceFlowers(flowerbed, n) {
    let len = flowerbed.length;
    let count = 0;

    if (n === 0) {
        return true;
    }

    if (len < 3) {
        if (len === 1 && flowerbed[0] === 0 && n === 1) {
            return true;
        } else if (len === 2 && flowerbed[0] === 0 && flowerbed[1] === 0 && n === 1) {
            return true;
        } else {
            return false;
        }
    } else {

        if (flowerbed[0] === 0 && flowerbed[1] === 0) {
            flowerbed[0] = 1;
            count++;
        }

        if (flowerbed[len - 1] === 0 && flowerbed[len - 2] === 0) {
            flowerbed[len - 1] = 1;
            count++;
        }

        let i = 0;

        while (i < len - 2) {
            if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i + 2] === 0) {
                flowerbed[i + 1] = 1;
                count++;
            }

            i++;
        }
    }

    if (n <= count) {
        return true;
    } else {
        return false;
    }

}