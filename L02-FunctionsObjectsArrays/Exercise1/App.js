let arr = [1, 54, 4, 2, 27, 100, 784, 5, 90, 47];

const max = (arr) => {
    let maxNum = Number.MIN_VALUE;

    for (const i of arr) {
        if (i > maxNum) {
            maxNum = i;
        }
    }

    return maxNum;
}

console.log(max(arr));

const contains = (arr, number) => {
    let containsNumber = false;

    for (const i of arr) {
        if (i === number) {
            containsNumber = true;
        }
    }

    return containsNumber;
}

console.log(contains(arr, 4));

const sum = (arr) => {
    let sumOfNumbers = 0;

    for (const i of arr) {
        sumOfNumbers += i;
    }

    return sumOfNumbers;
}

console.log(sum(arr));