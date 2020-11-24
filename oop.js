class Person {
  static breath = true; // punya emaknya doang, anaknya engga
  static deleteAccount = function () {}; // static method

  constructor(name, address, password, email, noHP) {
    this.name = name; // property
    this.address = address; // property
    this.password = password; // property
    this.email = email; // property
    // this.login = function () {}; // method
    this.lupaPassword = function () {};
    this.noHP = noHP;
  }

  login() {
    console.log("Login Success!");
  }

  logout() {
    console.log("Logout Success!");
    // this.showAtmNumber();
  }

  showAtmNumber() {
    console.log("62148792387");
  }
}

// tanpa class
let person1 = {
  name: "Reza",
  address: "Magelang",
};

let person2 = {
  name: "Reza 2",
  address: "Magelang",
};

let person3 = {
  name: "Reza 3",
  address: "Magelang",
};

let personC1 = new Person("Putri", "Sumbawa");
let personC2 = new Person("Wawan", "Bandung");

// console.log(person1.name);
// console.log(personC1.breath);
// console.log(Person.breath);
// console.log(personC1);
// personC1.login();
// personC1.logout();
// personC1.showAtmNumber();
// console.log(this); // global > target window object / node method
// console.log(personC1, "--person c 1");
// console.log(personC2.address);

let tes = function () {
  //   console.log(this);
};

// tes();

console.log(personC1 instanceof Person);

let personC3 = new Person("Jakarta", "Seli");
console.log(personC3);

// let resultName = function bikinName() {}
// function bikinPassword() {
//     resultName + "164789236548376"
// }
