// filter, map, reduce

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// soal pertama
// balikin value > 5
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    arr1.push(arr[i]);
  }
}

let arr1Filter = arr.filter((el) => {
  return el > 5;
});

// soal kedua
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push({ value: arr1[i] + 5 });
}

let arr2Map = arr1.map((el) => {
  return {
    value: el + 5,
  };
});

let arr3 = arr
  .filter((el) => el > 5)
  .map((el) => {
    return {
      value: el + 5,
    };
  });

console.log(arr1);
console.log(arr2);
console.log(arr1Filter);
console.log(arr2Map);
console.log(arr3);

// let arrRes = [
//   { value: 6 },
//   { value: 7 },
//   { value: 8 },
//   { value: 9 },
//   { value: 10 },
// ];
