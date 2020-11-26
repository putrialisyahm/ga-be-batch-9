// #, getter

class User {
  constructor(props) {
    // props is object, because it is better that way
    let { email, kelas, password } = props; // Destruct
    // let email = props.email
    // let password = props.password
    this.#email = email;
    this.kelas = kelas;
    this.encryptedPassword = this.#encrypt(password); // We won't save the plain password
  }

  // Private method
  #encrypt = (password) => {
    return `pretend-this-is-an-encrypted-version-of-${password}`;
  };

  // Getter
  #decrypt = () => {
    return this.encryptedPassword.split(
      `pretend-this-is-an-encrypted-version-of-`
    )[1];
  };

  authenticate(password) {
    return this.#decrypt() === password; // Will return true or false
  }
}

let Reza = new User({
  email: "reza@mail.com",
  kelas: "Backend",
  password: "123456",
});

console.log(Reza);

const isAuthenticated = Reza.authenticate("123456");
console.log(isAuthenticated); // true
console.log(Reza.getEmail());

// let obj = {
//   name: "Wawan",
//   kelas: "Backend",
// };

// obj.name;
// obj.kelas;

// let { name } = obj;
// let name = obj.name;
