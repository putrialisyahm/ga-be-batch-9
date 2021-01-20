let A = [2, -4, 6, -3, 9];

function minAbs(arr) {
  let minValue = arr[0];

  let tempValue;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      tempValue = Math.abs(A.slice(i, j).reduce((a, b) => a + b));
      if (tempValue < minValue) minValue = tempValue;
    }
  }

  return minValue;
}

let sol = minAbs(A);
console.log(sol);
