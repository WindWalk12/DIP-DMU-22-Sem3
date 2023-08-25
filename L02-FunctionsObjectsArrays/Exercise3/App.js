let arr = ["sje", "ja", "nej", "Cas"];

const compareFunctions = {
    compare : (s1, s2) => {
        return s1.localeCompare(s2);
    },
    compareLen : (s1, s2) => {
        if(s1.length < s2.length) {
            return -1;
        } else if (s1.length === s2.length) {
            return 0;
        } else if (s1.length > s2.length) {
            return 1;
        }
    },
    compareIgnoreCase : (s1, s2) => {
        return s1.toLowerCase().localeCompare(s2.toLowerCase());
    }
}

console.log(`Compare: ${compareFunctions.compare(arr[0], arr[2])}`);
console.log(`CompareLen: ${compareFunctions.compareLen(arr[0], arr[2])}`);
console.log(`CompareIgnoreCase: ${compareFunctions.compareIgnoreCase(arr[0], arr[3])}`);

const bubbleSort = (arr, compare) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if(compare(arr[j], arr[j + 1]) === 1) {
                let temp = arr[j];
                arr[j] = arr[j +  1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(arr, compareFunctions.compareLen);

console.log(`Sort of array: ${arr}`);