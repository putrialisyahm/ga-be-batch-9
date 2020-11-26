// function checkNum(a) {
//   let operate = new Promise((resolve, reject) => {
//     if (typeof a == "number") {
//       resolve("Yes it's a number");
//     } else {
//       reject("It is not a number");
//     }
//   });

//   operate.then((res) => console.log(res)).catch((err) => console.log(err));
// }

// checkNum(false);

// Import fs module that can read/write file
const fs = require("fs");

/* Start make promise object */
const readFile = (file, options) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, options, (err, content) => {
      if (err) return reject(err);
      return resolve(content);
    });
  });
/* End make promise object */

// Start using promise object */
readFile("content1.txt", "utf-8") // process to read file content.txt
  .then((content) => {
    // success to read file
    console.log("Success read file, content: ", content);
  })
  .catch((err) => {
    // error message to read file
    console.log("Error when trying to read file: ", err);
  });
/* End using promise object */
