// Examble of a HOF function with a callback function

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

// More advanced example

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}


// CSS example - Make odd and even row in table different color

// tr:nth-child(even) {background: #CCC}
// tr:nth-child(odd) {background: #FFF}

// For COL

// col:first-child {background: #FF0}
// col:nth-child(2n+3) {background: #CCC}