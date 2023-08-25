let array = ["4", "2", "9", "13", "0", "3", "8", "15"];
let array2 = ["5", "1", "9", "5", "10", "3", "14", "15"];
let mergedArray = [];

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
bubbleSort(array2);

console.log(`Sort of array: ${array}`);
console.log(`\nSort of array2: ${array2}`);

const mergeOfTwoArray = (arr, arr2) => {
    let length = arr.length + arr2.length;
    let j = 0;
    let k = 0;

    for (let i = 0; i <= length; i++) {
        if(parseInt(arr[j]) < parseInt(arr2[k])) {
            mergedArray.push(arr[j]);
            j++;
        } else if (parseInt(arr[j]) > parseInt(arr2[k])) {
            mergedArray.push(arr2[k]);
            k++;
        } else if (parseInt(arr[j]) == parseInt(arr2[k])) {
            mergedArray.push(arr[j]);
            mergedArray.push(arr2[k]);
            j++;
            k++;
        }
    }
}

mergeOfTwoArray(array, array2);

console.log(`\nMerged array: ${mergedArray.toString()}`);