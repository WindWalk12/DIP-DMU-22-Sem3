let Array = ["4", "2", "9", "13", "0", "3", "8", "15"];



//BubbleSort
const bubbleSort = (arr) => {
    const swap = (x, y) => {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if(parseInt(arr[j]) > parseInt(arr[j + 1])) {
                swap(j, j + 1);
            }
        }
    }
}

bubbleSort(Array);

console.log(Array.toString());

const binarySearch = (arr, x, start = 0, end = arr.length) => {
    if( end < start) return -1;

    let mid = Math.floor((start + end) / 2);

    if(parseInt(arr[mid]) === x) return mid;

    if(arr[mid] < x) return binarySearch(arr, x, mid + 1, end);
    else return binarySearch(arr, x, start, mid - 1);
}

let findNumber = 9;

console.log(`\nBinary search for ${findNumber}: ${binarySearch(Array, findNumber)}`);