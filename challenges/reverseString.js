// function to reverse a string
// Seli > iles, putri > irtup

function reverseStr(str) {
  let result = "";
  let lastIndex = str.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    // start, stop, step
    // console.log(str[i]);
    result += str[i]; // re-assign
  }

  return result;
}

let sol1 = reverseStr("selirose"); // esoriles
console.log(sol1);
