const Calculator = (() => {
  let result;

  function parseIfStr(a, b) {
    let numA = a;
    let numB = b;

    if (a === undefined && b === undefined) {
      return [numA, numB];
    }

    if (a === undefined) {
      numA = 0;
    } else if (typeof a === "string") {
      const aParsed = Number(a);
      if (isNaN(aParsed)) {
        console.log("Sorry, but the first value is a string and I cannot convert it to a number");
      } else {
        numA = aParsed;
      }
    }

    if (b === undefined) {
      numB = 0;
    } else if (typeof b === "string") {
      const bParsed = Number(b);
      if (isNaN(bParsed)) {
        console.log("Sorry, but the second value is a string and I cannot convert it to a number");
      } else {
        numB = bParsed;
      }
    }

    return [numA, numB];
  }

  function add(a, b = 0) {
    const [numA, numB] = parseIfStr(a, b);
    result = numA + numB;
    return result;
  }

  function subtract(a, b) {
    const [numA, numB] = parseIfStr(a, b);
    result = numA - numB;
    return result;
  }

   function multiply(a, b) {
    const [numA, numB] = parseIfStr(a, b);
    result = numA * numB;
    return result;
  }

  function divide(a, b) {
    const [numA, numB] = parseIfStr(a, b);
    if (numB === 0) {
      console.log("Cannot divide by zero");
      return undefined;
    }
    result = numA / numB;
    return result;
  }

  function clearMemory() {
    result = 0;
  }

  function getMemoryAsString() {
    return result.toString();
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    clearMemory: clearMemory,
    getMemoryAsString: getMemoryAsString
  };
})();

console.log(Calculator.add(5, 3)); // Output: 8
console.log(Calculator.getMemoryAsString()); // Output: "8"
Calculator.clearMemory();
console.log(Calculator.getMemoryAsString()); // Output: "0"
console.log(Calculator.add('2', 3)); // Output: 5
console.log(Calculator.getMemoryAsString()); // Output: "5"

console.log(Calculator.add(undefined, undefined)); // резульльтат нуль, тому що змінну визначили, проте нічого не ввели
console.log(Calculator.add(undefined, 2)); // результат буде 2
console.log(Calculator.add('3')); // результат буде 3

console.log(Calculator.multiply(5, 3)); // Output: 15
console.log(Calculator.getMemoryAsString()); // Output: "15"

console.log(Calculator.divide(10, 2)); // Output: 5
console.log(Calculator.getMemoryAsString()); // Output: "5"

console.log(Calculator.divide(10, 0)); // Output: "Cannot divide by zero" та undefined
console.log(Calculator.getMemoryAsString()); // Output: "5" (оскільки результат ділення на 0 не зберігається в пам'яті)