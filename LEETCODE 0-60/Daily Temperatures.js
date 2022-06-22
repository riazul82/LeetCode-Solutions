function dailyTemperatures(temperatures) {
    let answer = [];

    for (let i = 0; i < temperatures.length; i++) {
        let isFound = false;
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                x = j - i;
                answer.push(x);
                isFound = true;
                break;
            }
        }

        if (!isFound) {
            answer.push(0);
        }
    }

    return answer;
}