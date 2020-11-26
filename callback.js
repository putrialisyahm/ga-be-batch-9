// Import fs module that can read/write file
const fs = require("fs");

/* Start callback (ES5) */
fs.readFile("content1.txt", "utf-8", (err, content1) => {
  // read file content1.txt
  if (err) throw err; // error if can't read
  fs.readFile("content2.txt", "utf-8", (err, content2) => {
    // read file content2.txt
    if (err) throw err; // error if can't read
    fs.readFile("content3.txt", "utf-8", (err, content3) => {
      // read file content3.txt
      if (err) throw err; // error if can't read
      fs.readFile("content4.txt", "utf-8", (err, content4) => {
        // read file content3.txt
        if (err) throw err; // error if can't read
        fs.writeFile(
          "result.txt",
          content1 + content2 + content3 + content4,
          (err) => {
            // read file content4.txt
            if (err) throw err; // error if can't read
            console.log("Writing done!"); // print Writing done! if no error
          }
        );
      });
    });
  });
});
/* End callback */

// function fs() {
//   let num = 1 * 2;
//   return function (num) {
//     return function () {
//       return function () {
//         return "End";
//       };
//     };
//   };
// }
