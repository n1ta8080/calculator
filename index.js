const Calculator = (() => {
  let result;

  function add(a, b) {
    result = a + b;
    return result;
  }

  function subtract(a, b) {
    result = a - b;
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