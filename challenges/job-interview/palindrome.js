// malam, katak, ana, ini, ono, kasurinirusak

// reverse stringnya
// compare ke initial string
function palindrome(str) {
  // function declaration, hoisting
  let strReversed = str.split("").reverse().join("");
  return str === strReversed;
}

let sol = palindrome("katak");

console.log(sol);

// let palindromes = function (str) {}; // function expression, no hoisting

function palindromes(str) {
  // soluion 1
  // kita store semua str dari reversenya
  // compare reverse and initial str
  // let strReverse = []
  // i = lastIndex, i >= 0, i--
  // strReverse.push(str[i])
  // strReverse.join() === str

  // solution 2
  // using binary search
  let len = str.length;
  let lastIndex = str.length - 1;
  let middleIndex = len / 2;

  // looping simulation
  // malan
  // m a l
  // n a l

  for (let i = 0; i < middleIndex; i++) {
    if (str[i] !== str[lastIndex - i]) {
      return false;
    }
  }

  return true;
}

let sol2 = palindromes("katak");

console.log(sol2);
