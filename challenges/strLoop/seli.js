// create function to print string as n times
// title case the string

function printStr(str, n) {
  // container
  let result = "";

  for (let i = 0; i < n; i++) {
    // 0 1
    result += str + " "; // `${str} `
  }

  return result;
  // looping, result + n times

  // return result
}
let sol = printStr("Seli", 2);
console.log(sol);

// e.g. printStr("Seli", 2) > "Seli Seli"

// function titleCase(str) {} // str.toUpperCase()

// e.g. titleCase("hari ini hujan turun") > "Hari Ini Hujan Turun"
