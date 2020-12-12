// create report from array, sum of all, average of all, max value, min value, range

let input = [
  101,
  7,
  1000,
  20214,
  426,
  7923,
  5139,
  15761,
  112,
  6720,
  8754,
  8654,
];

function generateReport(arr) {
  let result = {
    sum: 0,
    average: 0,
    max: 0,
    min: 0,
    range: 0,
  };

  // sorting array ascending
  arr.sort((a, b) => a - b);

  // sum
  for (let i = 0; i < arr.length; i++) {
    result.sum += arr[i];
  }

  // for (let el of arr) {
  //   result.sum += el;
  // }

  // average
  result.average = result.sum / arr.length;

  // max
  result.max = arr[arr.length - 1];

  // min
  result.min = arr[0];

  // range : max - min
  result.range = result.max - result.min;

  return result;
}

let output = {
  sum: "",
  average: "",
  max: "",
  min: "",
  range: "",
};

let sol = generateReport(input);
console.log(sol);
