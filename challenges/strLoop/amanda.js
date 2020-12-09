//question 1
// create function to print string as n times
// title case the string

function printStr(str, n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += str + " ";
  }
  return result;
}

console.log(printStr("Seli", 2));

// e.g. printStr("Seli", 2) > "Seli Seli"

//question 2
function titleCase(str) {
  let begin = "hari ini hujan turun";
  let begin1 = str.split();
}

// e.g. titleCase("hari ini hujan turun") > "Hari Ini Hujan Turun"
