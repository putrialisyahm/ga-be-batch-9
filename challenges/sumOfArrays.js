// function to sum some several arrays
// [[1,2],[3,4],[5],[7]] return 22

function sumArr(arr) {
  let sum = 0; // container
  for (let i = 0; i < arr.length; i++) {
    // 0 0
    // 0 1
    // 1 0
    // 1 1
    // 2 0
    // 3 0
    for (let j = 0; j < arr[i].length; j++) {
      console.log(i, "i", j, "j", "value:", arr[i][j]);
      //   console.log(arr[i][j]);
      sum += arr[i][j];
    }
  }
  return sum;
}

let sol1 = sumArr([[1, 2], [3, 4], [5], [7]]); // return 22

console.log(sol1);
