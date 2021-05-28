function isPrime(num) {
  let isPrime = false;

  for (let i = 2; i <= num; i++){
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if ( (isPrime) && (num === i) ) {
      return true;
    }
  }
  
  return false;
}

function printNumberResult(number) {
  if (isPrime(number)) {
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

isPrimeNumber([-2, -1, 0, 1, 2, 3, 4, 5]);
isPrimeNumber();
