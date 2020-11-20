let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1]; // proper way to clone array

arr2[2] = 5;

// console.log(arr1, "--arr1");
// console.log(arr2, "--arr2");
throw new Error("masukin nama yang bener oi");

return;
// filter
let arr = [[1, [2, [4], 5, 6, [7]]]];

// console.log(arr[0][1][1][0]);

// mutate sm immutate
// % modulus
// let filtered = arrFil.filter((el) => console.log(el));
// for loop + conditional

let arrFil = [1, [2, 3, 4, 5, 6], 3, 4, 5, 8, 9, 10, 11, 12];
// arr[0]
// arr[0]
// arr[0][1]
// 0 1 2 3 4 5 6 7
// 0 1 10 11 12 13 14 2 3 4 5 6 7 8
// arr[1][0]
// arr[1][1]
// arr[1][2]
// arr[1][3]
// arr[2]
// arr[3]
// let filtered = [];

// * #
// * ##
// * ###
// * ####

for (let i = 0; i < arrFil.length; i++) {
  for (let j = 0; j < arrFil[i].length; j++) {
    arrFil[i][j];
  }
  if (arrFil[i] % 2 != 0) {
    if (arrFil[i] < 5) {
      if (arr[i] % 3 == 0) {
        console.log(arrFil[i]);
        filtered.push(arrFil[i]);
      }
    }
  }
}

// let filtered = arrFil.filter((el, i) => {
//   console.log(i, el); // arrFil[0]
// });

// let filtered = arrFil.filter((el) => el % 2 != 0 && el < 5);

// console.log(filtered);
