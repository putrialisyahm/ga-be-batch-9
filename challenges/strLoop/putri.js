// create function to print string as n times
// title case the string

// function printStr(str, n) {
// // container
// let result = "";

// for (let i = 1; i <= n; i++) {
//     result += str
// }

// e.g. printStr("Seli", 2) > "Seli Seli"

function titleCase(str) {
  let strInput = str.toLowerCase();

  for (i = 0; i < strInput.length; i++) {
    if (i == 0) {
      strInput[i].toUpperCase();
    }

    if (str[i] == " ") {
      strInput[i + 1].toUpperCase();
    }
  }

  return strInput;
}
console.log(titleCase("hari ini hujan turun"));

// e.g. titleCase("hari ini hujan turun") > "Hari Ini Hujan Turun"
