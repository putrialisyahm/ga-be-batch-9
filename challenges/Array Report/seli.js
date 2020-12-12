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

// let strNum = "1234bsajhfbg1234";

// let num = parseInt("120");

// console.log(parseInt(strNum));

function arrayReport(arr) {
  let result = {
    sum: 0,
    average: 0,
    max: 0,
    min: 0,
  };

  let array = [];
  // filter array
  for (let i = 0; i < input.length; i++) {
    if (typeof arr[i] == "number" || !isNaN(parseInt(arr[i]))) {
      array.push(parseInt(arr[i]));
    }
  }

  // sum
  for (let i = 0; i < array.length; i++) {
    result.sum += array[i];
  }

  // average
  // result.average = result.sum / array.length;
  for (let i = 0; i < array.length; i++) {
    result.average += array[i] / array.length;
  }

  // max
  let maxTemp = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxTemp) {
      maxTemp = array[i];
      //   console.log(maxTemp, array[i]);
    }
    result.max = maxTemp;
  }

  // min
  let minTemp = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minTemp) {
      minTemp = array[i];
    }
    result.min = minTemp;
  }

  return result;

  //   for (let i = 0; i < arr.length; i++) {
  //     result.sum += arr[i];
  //   }
}

//
let sol = arrayReport(input);
console.log(sol);
