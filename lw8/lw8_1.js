function isPrimeByEratostheneSieve(num) {
  let primeNumbers = [2];

  for (let i = 3; i <= num; i++) {
    let isPrime = true;
    for (let primeNum of primeNumbers) {
      if (num % primeNum === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primeNumbers.push(num);
    }
  }

  for (let primeNum of primeNumbers) {
    if (primeNum === num) {
      return true;
    }
  }
  return false;
}

function printNumberResult(number) {
  if (isPrimeByEratostheneSieve(number)) {
    console.log(number + ' is prime number');
  } else {
    console.log(number + ' is not prime number');
  }
}

function isPrimeNumber(args) {
  if (typeof args === 'number') {
    printNumberResult(args);
  } else if (Array.isArray(args)) {
    for (let num of args) {
      if (typeof num === 'number') {
        printNumberResult(num);
      } else {
        console.log("Invalid type of array's element");
      }
    }
  } else {
    console.log('Invalid argument');
  }
}

isPrimeNumber([20, 5]);
