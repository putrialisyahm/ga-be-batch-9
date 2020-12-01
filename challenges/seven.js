// palindrome, anagram, sorting algorithm

// seven detector case

// create a function to check if in an array have sum of 2 numbers equal seven
// e.g. [1,3,4] > true 3 + 4 = 7, else false
// constraint
// min elemen 2 e.g. [1,2] ... [1]

function seven(arr) {
  // make sure element minimum 2
  if (arr.length < 2) return "Please input arr minimum length of 2!";

  // check if two numbers can sum of seven

  for (let i = 0; i < arr.length; i++) {
    // validate to not sum last index value
    let lastIndex = arr.length - 1;

    if (i == lastIndex) {
      break;
    }

    if (arr[i] + arr[i + 1] === 7) return true;
  }

  return false;
}

// test case
let sol1 = seven([1, 2, 4, 7, 8, 9, 2, 5]); // true
let sol2 = seven([11, 8, 9, 10, 1, 2, 3]); // false
let sol3 = seven([1]);

console.log(sol1, "-- sol1");
console.log(sol2, "-- sol2");
console.log(sol3, "-- sol3");
