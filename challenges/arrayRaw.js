// create a class of customArr
// dia bisa ngepush, ngepop, ngitung length

let arr1 = [];
// console.log(arr1.length);
// arr1[0] = "Seli";
// arr1[1] = "Putri";
// delete arr1[1];
arr1.pop();
console.log(arr1);

class newArr {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(apaaja) {
    this.data[this.length] = apaaja;
    this.length++;
    return this.data;
  }

  pop() {
    if (this.length > 0) {
      delete this.data[this.length - 1];
      this.length--;
      return this.data;
    }
  }

  length() {
    return this.length;
  }
}

let arrTest = new newArr();
arrTest.push("Seli");
arrTest.push("Putri");
arrTest.pop();

console.log(arrTest.data, "--arr test");
