function curriedAdd(initialVal = 0) {
  let sum = initialVal;

  function add(value) {
    if (typeof value === "number") {
      sum += value;
      return add;
    } else {
      return sum;
    }
  }

  return add;
}
