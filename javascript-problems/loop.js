// ***** Check Prime Number from 1 to 50 ******

for (let num = 2; num <= 50; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num + " ");
  }
}

// Output:
// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47

// ***** Find Factorial of a Number ******
let num = 5;
let factorial = 1;
let i = 1;

while (i <= num) {
  factorial *= i;
  i++;
}

console.log(`Factorial of ${num} is ${factorial}`);
// Factorial of 5 is 120
