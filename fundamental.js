// variable
// data type
// operator
// conditional
// function
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
console.log(arr[2]);
