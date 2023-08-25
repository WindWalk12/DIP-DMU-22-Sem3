let array = ["uhsa", "Hjauf", "uaaaf", "kalyf", "haun"];

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if(arr[j].localeCompare(arr[j + 1]) === 1) {
                let temp = arr[j];
                arr[j] = arr[j +  1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(array);

console.log(`Sort of array: ${array}`);