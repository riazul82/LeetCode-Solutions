function twoSum(numbers, target) {
    let firstIndex = 0;
    let lastIndex = numbers.length - 1;

    while (firstIndex !== lastIndex) {
        if (numbers[firstIndex] + numbers[lastIndex] === target) {
            return [firstIndex + 1, lastIndex + 1];
        }

        if (numbers[firstIndex] + numbers[lastIndex] > target) {
            lastIndex--;
        } else {
            firstIndex++;
        }
    }
}