// variable - DONE
// data type - DONE
// function - DONE
// conditional - DONE
// operator - DONE
// comparation
// looping
// data collection (Array, Object)
// truthy and falsy value
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
if (var1 === 1) {
  // true
  console.log("Bener nih!");
}
// else if (var1 === 0) {
//   console.log("Nilainya nol!");
// } else if (var1 === 2) {
//   console.log("Nilainya dua!");
// }
else {
  // false
  console.log("Bukan");
}

// ternary operator
var1 === 1
  ? console.log("bener nih!")
  : var1 === 0
  ? console.log("nilainya nol!")
  : console.log("Bukan!");

var1 === 2 ? console.log("duaa") : console.log("bukann");

// comparation
// && || > < >= <=
