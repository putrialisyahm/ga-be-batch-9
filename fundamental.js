// variable - DONE
// data type - DONE
// function - DONE
// conditional - DONE
// operator - DONE
// comparation - DONE
// looping - DONE
// data collection (Array, Object) - DONE
// truthy and falsy value - DONE
// debug
// scope (local, function, global)

// ++
// higher order
// OOP
// ES6,ES7,ES8

// variable
// declare and assign variable
// var, let, const

// declaration
const name = "ilham";
// console.log(name, "--name top");

// const name = "putri";
// console.log(name, "--name bottom");

// assignment
let classGA = "backend"; // assign
classGA = "frontend"; // re-assign

const code = 1234;
// code = 1567;

// console.log(classGA, "--class ga");
// console.log(code, "--code");

// declaration
// var > dia boleh duplicate variablenya
// let, const > dia harus unik, ga boleh samaan namanya

// assignment
// var, let > dia bisa diganti
// const > dia ga boleh diganti

// data type
// string, number, boolean, undefined, null, object, array
// strict type sama dynamic/loose typed language

// string
let data = 3;
let str2 = "12";
// concatenate

// let str3 = str + str2;
// console.log(str3, "--str3");

// number
let num = 1234;

// boolean
let bol = true;
let bol1 = false;

// undefined & not defined
let und;
// und1
// console.log(und);
// console.log(und1);

// null
let nul = null;

// object {}
// key, value
let user = {
  id: 1,
  name: "Seli", // property & method
  "class GA": "Backend",
  password: "seli123",
  awardee: false,
  login: function () {
    console.log("Log in!");
  },
  absensi: [1, 1, 1, "Ilham", null, false, 0, 0, 0],
};

// dot & []
// console.log(obj["class GA"]);
// let name = "Seli";
// let classGA = "Backend";

// array []
// index
// array method (indexOf, slice, splice dkk.)

let arr = ["ilham", "eka", "seli", "wawan"];
// console.log(arr[2]);

const Pi = 3.14;

let tabularArea = Pi * 5 ** 2;

// function
// expression, declaration
// hoisting

// expression
function countMax(number1, number2) {
  let min =
    "Nilai terkecil adalah: " +
    number1 +
    "dan nilai terkecil adalah " +
    number2;
  // let max = "Nilai terbesar adalah: " + number2;
  let max = `Nilai terbesar adalah ${number2} dan nilai terkecil adalah ${number1}`;
  // a;
  // b;
  return max;
}

let sol = countMax(1, 2);
// countMax();
// console.log(sol);

// declaration
let countMaxDec = function () {};

// arrow function ES6
let countMaxArrow = () => {};

// conditional
let var1 = 2;
let var2 = 1;

// ===, strict equal, VALUE & DATA TYPE nya harus SAMA
// ==, VALUE nya harus sama
// if (var1 === 1) {
//   // true
//   console.log("Bener nih!");
// }
// // else if (var1 === 0) {
// //   console.log("Nilainya nol!");
// // } else if (var1 === 2) {
// //   console.log("Nilainya dua!");
// // }
// else {
//   // false
//   console.log("Bukan");
// }

// ternary operator
// var1 === 1
//   ? console.log("bener nih!")
//   : var1 === 0
//   ? console.log("nilainya nol!")
//   : console.log("Bukan!");

// var1 === 2 ? console.log("duaa") : console.log("bukann");

// comparation
// && || > < >= <=

// review conditional
// jika hari ini senin  > makan ayam
// hari ini selasa > makan ikan
// hari kamis dan hari itu hujan  dan hari itu juga ada pelangi> makan indomie
// selain hari di atas > makan tempe

// let hari = "senin"; // assignment
// let hujan = false;
// let pelangi = true;

// if (hari === "senin") {
//   console.log("makan ayam");
// } else if (hari === "selasa") {
//   console.log("makan ikan");
// } else if (hari === "kamis" && hujan === true && pelangi === true) {
//   console.log("makan indomie");
// } else {
//   console.log("makan tempe");
// }

// true && false > false
// true || false > true

// looping
// print angka 1 - 10

// for("start"; "stop"; "step") {
// }

for (let i = 0; i <= 5; i++) {
  // console.log(i, "-i");
  // if (i === 20 || i === 35) {
  //   console.log(i, "saat -i 20 atau 35");
  // }
  // saat i nya bukan 3, print "bukan tiga". selain itu, "tiga"
  // ternary operator
  // condition ? true : false
  // i !== 3 ? console.log(i, "bukan tiga") : console.log(i, "tiga");
  // if (i !== 3) {
  //   console.log("bukan tiga");
  // } else if (i === 2) {
  //   console.log("dua");
  // } else {
  //   console.log("tiga");
  // }
  // basic conditional
  // if (condition) {true}
  // else {false}
}

// data collection
// object > key, value
// array > index

let student = {
  name: "seli",
  gender: "female",
  class: "backend",
  dream: "ibu rumah tangga",
  noHp: 2364975623987,
  login: function () {
    "login";
  },
  chat: function () {
    "chat";
  },
};

let readline = {
  open: function open() {},
  close: function close() {},
};

readline.close();

let studentNames = ["seli", "putri", "wawan", "eka"];

// console.log(student.name);
// console.log(student.dream);
// console.log(student.address ? student.address : "ga ada nih");

studentArr.splice(2, 1);
// console.log(studentArr);

// truthy value

// true
// {}
// []
// 42
// "0"
// "false"
// new Date(
// -42
// 12n
// 3.14
// -3.14
// Infinity
// -Infinity

// falsy value

// false
// null
// undefined
// 0
// -0
// 0n
// NaN
// ""

// if (condition) { condition = true}
// else { condition = false

// review conditional
// jika hari ini senin  > makan ayam
// hari ini selasa > makan ikan
// hari kamis dan hari itu hujan  dan hari itu juga ada pelangi> makan indomie
// selain hari di atas > makan tempe

let hari = "senin"; // assignment
let hujan = 1;
let pelangi = 0;

if (hari === "senin") {
  console.log("makan ayam");
} else if (hari === "selasa") {
  console.log("makan ikan");
} else if (hari === "kamis" && hujan === true && pelangi) {
  console.log("makan indomie");
} else {
  console.log("makan tempe");
}
