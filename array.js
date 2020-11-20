let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  2,
  3,
  4,
  5,
  6,
  9,
  10,
  1,
  2,
  37,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];

// method
// push, pop
// unshift, shift
// splice, slice
// includes, indexOf

// mutate & immutate
arr.push(11);
console.log(arr, "-push");
arr.pop();
console.log(arr, "-pop");
arr.unshift(0);
console.log(arr, "-unshift");
arr.shift();
console.log(arr, "-shift");
let arrSlice = arr.slice(3, 5); // index 3-4, exclude end
console.log(arrSlice, "--slice");
// arr.splice(3, 3);
console.log(arr, "-splice");

console.log(arr.includes(37), "--includes");
let index = arr.indexOf(37);

// apakah nilai nya ada di dalem target array
index != -1
  ? console.log("nilainya ada", arr[index])
  : console.log("Nilainya ga ada");

if (index != -1) {
  // check if value is available in array or not
  console.log("nilainya ada", arr[index]);
} else {
  console.log("Nilainya ga ada");
}

console.log(arr.indexOf(37), "--index number");
// forEach, filter, map, findIndex
console.log(arr[index]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
