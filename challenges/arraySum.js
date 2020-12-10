// function ArrTenConverter(arr) {} > arr = [1,2,3,4,5,6,7,8,9,10]
// ArrTenconverter(arr) > [10,20,30,40,50,60,70,80,90,100]

//input
let input = ["a", 2, 3, 4, 5, 6, 7, 8, 9, 10];
let input2 = { number: 1 };
let errInput = 1;

// console.log(typeof input);
// console.log(typeof input2);
// console.log(input.length);
// console.log(input2.length);

function ArrTenConverter(arr) {}

// test case
ArrTenConverter([1, 2, 3, 4, 5]);

// return [10,20,30,40,50]

// for loop biasa (WAJIB)
function sol1(arr) {
  if (typeof arr !== "object" || !arr.length) {
    return "Please only provide an array!";
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") arr[i] = 0;
    arr[i] *= 10;
  }

  return arr;
}

console.log(sol1(input2));

// BONUS POINT
// Validator > ["a"], ubah jadi 0 > ["A",2,3,"B",5] > [0,20,30,0,50]

// for of (opsional)
function sol2(arr) {
  let result = [];

  for (let el of arr) {
    if (typeof el !== "number") {
      el = 0;
    }

    result.push(el * 10);
  }

  return result;
}

// console.log(sol2(input));

// map (opsional)

function sol3(arr) {
  return arr.map((el) => (typeof el === "number" ? el * 10 : 0));
}

// console.log(sol3(input));
