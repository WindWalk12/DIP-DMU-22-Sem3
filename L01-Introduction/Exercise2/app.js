let array = ["4", "2", "9", "13", "0", "3", "8", "15"];

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if(parseInt(arr[j]) > parseInt(arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j +  1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(array);

console.log(`Sort of array: ${array}`);