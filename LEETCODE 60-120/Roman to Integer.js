function romanToInt(roman) {
    let i = 0;
    let integer = 0; 

    while (i < roman.length) {
        if (roman[i] === 'I') {
            if (roman[i + 1] === 'V') {
                integer += 4;
                i++;
            } else if (roman[i + 1] === 'X') {
                integer += 9;
                i++;
            } else {
                integer += 1;
            }
        } else if (roman[i] === 'V') {
            integer += 5;
        } else if (roman[i] === 'X') {
            if (roman[i + 1] === 'L') {
                integer += 40;
                i++;
            } else if (roman[i + 1] === 'C') {
                integer += 90;
                i++;
            } else {
                integer += 10;
            }
        } else if (roman[i] === 'L') {
            integer += 50;
        } else if (roman[i] === 'C') {
            if (roman[i + 1] === 'D') {
                integer += 400;
                i++;
            } else if (roman[i + 1] === 'M') {
                integer += 900;
                i++;
            } else {
                integer += 100;
            }
        } else if (roman[i] === 'D') {
            integer += 500;
        } else if (roman[i] === 'M') {
            integer += 1000;
        } else {
            integer += 0;
        }

        i++;
    }

    return integer;
}