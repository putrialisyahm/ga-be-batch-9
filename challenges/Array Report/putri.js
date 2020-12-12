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

//   let strNum = "1234bsaj";

//   let num = parseInt("120");

//   // console.log(parseInt(strNum));

arrayReport(input);

function arrayReport(arr) {
  let result = {
    sum: 0,
    average: 0,
    max: 0,
    min: 0,
    range: 0,
  };

  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      array.push(arr[i]);
    }
  }

  // sum
  for (let i = 0; i < array.length; i++) {
    result.sum += array[i];
  }

  // average
  for (let i = 0; i < array.length; i++) {
    result.average += array[i] / array.length;
  }
  // max
  for (let i = 0; i < array.length; i++) {
    // result.max = arr[arr.length - 1];
  }
  // min

  result.min = arr[0];
  return result;
}
let sol = arrayReport(input);
console.log(sol);
