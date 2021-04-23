class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
}

const processedOperations = ['+', '-', '/', '*'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const processedSymbols = [...processedOperations, ...digits, '(', ')', ' '];

function performCalculation(numbers, ch) {
  if (processedOperations.includes(ch)) {
    const operand1 = numbers.pop();
    const operand2 = numbers.pop();
    switch (ch) {
      case '+':
        numbers.push(operand1 + operand2);
        break;
      case '-':
        numbers.push(operand1 - operand2);
        break;
      case '*':
        numbers.push(operand1 * operand2);
        break;
      case '/':
        numbers.push(operand1 / operand2);
        break;
    }
  }
}

function calc(expression) {
  const numbers = new Stack();
  let isNumRead = false;
  let num = 0;
  let multiplier = 1;

  for (let i = expression.length - 1; i >= 0; i--) {
    ch = expression[i];
    if (processedSymbols.includes(ch)) {
      if (digits.includes(ch)) {
        if (!isNumRead) {
          isNumRead = true;
        }
        num = num + Number(ch) * multiplier;
        multiplier = multiplier * 10;
      } else {
        if (isNumRead) {
          numbers.push(num);
          multiplier = 1;
          num = 0;
          isNumRead = false;
        }
      }
      performCalculation(numbers, ch);
    } else {
      console.log(ch + ' is not correct symbol for math expression!');
      return null;
    }
  }
  if (numbers.stack.length === 1) {
    console.log(numbers.pop());
  } else {
    console.log('Incorrect math expression!');
  }
}
