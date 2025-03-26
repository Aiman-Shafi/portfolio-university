// ****** Problem 1: Find the Largest Number in an Array *******
const numbers = [5, 10, 15, 20, 25];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(`The largest number in the array is: ${largest}`);
// Output: The largest number in the array is: 25

// ***** Problem 2: Reverse an Array ******
let normalNumbers = [1, 2, 3, 4, 5];
let reversed = [];
let i = normalNumbers.length - 1;

while (i >= 0) {
  reversed.push(normalNumbers[i]);
  i--;
}

console.log(`[${reversed}]`);
// Output: [5, 4, 3, 2, 1]
