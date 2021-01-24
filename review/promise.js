function greeting() {
  setTimeout(() => {
    console.log("Retrieving user data...");
  }, 3000);
}

function greeting2() {
  setTimeout(() => {
    console.log("Here is your data..");
  }, 2000);
}

// demo
// greeting();
// greeting2();

// promise
function request(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500 + 500);
    console.log(delay);

    setTimeout(() => {
      if (delay > 4000) {
        reject("Gagal, kelamaan woi");
      } else {
        resolve(`Request Successs ${url}`);
      }
    }, delay);
  });
}

// console.log(request("mandaa"));

// pending, resolved, rejected

// then & catch
// async await, try catch

// request("seli.com/page1")
//   .then((data) => {
//     console.log(data);
//     return request("seli.com/page2");
//   })
//   .then((data) => {
//     console.log(data);
//     return request("seli.com/page3");
//   })
//   .then((data) => {
//     console.log(data);
//     return request("seli.com/page4");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

let execute = async () => {
  try {
    let req1 = await request("seli.com/page1");
    console.log(req1);
    let req2 = await request("seli.com/page2");
    console.log(req2);
    let req3 = await request("seli.com/page3");
    console.log(req3);
    let req4 = await request("seli.com/page4");
    console.log(req4);
  } catch (err) {
    console.log(err);
  }
};

execute();

function findOne(id) {
  let idManda = "manda123";

  return new Promise((resolve, reject) => {
    if (id == idManda) {
      resolve({
        id: "manda123",
        username: "Manda cinta dia selamanya",
        password: "26358oyb243765b342",
      });
    } else {
      reject(`User with id:${id} is not found!`);
    }
  });
}

async function findById(id) {
  let idManda = "manda123";
  if (id == idManda) {
    return {
      id: "manda123",
      username: "Manda cinta dia selamanya",
      password: "26358oyb243765b342",
    };
  } else {
    throw `User with id:${id} is not found!`;
  }
}

let userController = async (req, res) => {
  try {
    const { id, name, role } = req.params;

    let userData = await findById(id);
    userData.name = name;
    userData.role = role;
    console.log(userData);
  } catch (err) {
    console.log(err);
  }
};

// userController({
//   params: {
//     id: "seli123",
//     name: "mandaaa",
//     role: "ibu kost",
//   },
// });

// console.log(findById("seli123"));
const arr = ["seli", 30];
const name = arr[0];
const age = arr[1];

class User {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  static findOne() {
    console.log("Get user");
  }

  static findOneAndUpdate() {}
}

User.findOne();
User.findOneAndUpdate();

let userName = "SeLiadAlah";

async function lowercasing(str) {
  return str.toLowerCase();
}

const lowerCasing = async (str) => {
  let data = await lowercasing(str);
  console.log(data);
};

lowerCasing(userName);
