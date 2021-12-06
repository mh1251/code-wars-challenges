// If one element in the array is larger than another one, change it to the difference between the two.

function solution(numbers) {
    while (true) {
        numbers.sort((a, b) => a - b);
        console.log(numbers)
        if (numbers[0] === numbers[numbers.length - 1]) {
           break;
        }

        for (let i = 1; i <= numbers.length - 1; i++) {
            if (numbers[i] > numbers[0]) {
                numbers[i] = numbers[i] - numbers[0];
            }
        }

    }
    return numbers.reduce((acc, n) => acc + n);
}
console.log(solution([6, 2, 3]))
