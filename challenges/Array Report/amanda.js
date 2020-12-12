let input = [
  1,
  2,
  3,
  5,
  "A",
  null,
  false,
  true,
  undefined,
  63875,
  643,
  "264A",
  "74hjas",
];

// let strNum = "null";

// let num = parseInt("120");

// console.log(parseInt(strNum));

function arrayReport(arr) {
  let result = {
    sum: 0,
    average: 0,
    max: 0,
    min: 0,
    range: 0,
  };

  let array = [];
  for (let i = 0; i < input.length; i++) {
    if (typeof arr[i] == "number") {
      array.push(arr[i]);
    }
  }
  // sum
  for (let i = 0; i < array.length; i++) {
    result.sum += array[i];
  }

  // average
  result.average = result.sum / array.length;

  // max
  result.max = array[array.length - 1];

  // min
  result.min = array[0];

  // range : max - min
  result.range = result.max - result.min;

  return result;
}

let sol = arrayReport(input);
console.log(sol);

// sum
// average
// max
// min
