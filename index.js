const Calculator = (() => {
  let result;

  function parseIfStr(a, b) {
    let numA = a;
    let numB = b;

    // Перевіряємо, чи a або b не є undefined
    if (a === undefined || b === undefined) {
      return [numA, numB]; // Повертаємо вихідні значення без перетворення
    }

    if (typeof a === "string") {
      const aParsed = Number(a);
      if (isNaN(aParsed)) {
        console.log("Sorry, but the first value is a string and I cannot convert it to a number");
      } else {
        numA = aParsed;
      }
    }

    if (typeof b === "string") {
      const bParsed = Number(b);
      if (isNaN(bParsed)) {
        console.log("Sorry, but the second value is a string and I cannot convert it to a number");
      } else {
        numB = bParsed;
      }
    }

    return [numA, numB];
  }

  function add(a, b) {
    const [numA, numB] = parseIfStr(a, b);
    result = numA + numB;
    return result;
  }

  function subtract(a, b) {
    const [numA, numB] = parseIfStr(a, b);
    result = numA - numB;
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
console.log(Calculator.add(undefined, undefined)); // результат буде NaN