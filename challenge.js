// uppercase function based on index
let str = "jakarta"; // jakaRta
// console.log(str.length);
// console.log(str[2]);

function upperCasing(i) {
  // validate & sanitize
  // simpen index dari parameter
  let index = i;
  // cari huruf di str sesuai index
  let tempStr = str[index];
  // uppercase hurufnya
  tempStr = str[index].toUpperCase();

  return tempStr;
}

let sol = upperCasing("hskdgfiosdhc2");
console.log(sol);
