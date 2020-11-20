function multiply(num1, num2) {
  // CODE HERE
  let result;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 * num2;
  } else if (typeof num1 === undefined || typeof num2 === String) {
    result = "Please provide a value";
  } else {
    result = "PLease provide a number only!";
  }
  return result;
}

const result = multiply(2, 4);

console.log(result);
