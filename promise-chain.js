// Import fs to read/write file
const fs = require("fs");

/* Start make promise */
const readFile = (options) => (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, options, (err, content) => {
      if (err) return reject(err);
      return resolve(content);
    });
  });

const writeFile = (file, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, content, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
/* End make promise */

/* Make options variable for fs */
const read = readFile("utf-8");
// let result = "";
const x = 2,
  y = 1;
/* End make options variable for fs */

// Start using promise object */
// read("content1.txt") // process to read file content1.txt
//   .then((content1) => {
//     result += content1;
//     console.log(result, "---result 1");
//     return read("content2.txt"); // process to read file content1.txt
//   })
//   .then((content2) => {
//     result += content2;
//     console.log(result, "---result 2");
//     return read("content3.txt"); // process to read file content2.txt
//   })
//   .then((content3) => {
//     result += content3;
//     console.log(result, "---result 3");
//     return read("content4.txt"); // process to read file content3.txt
//   })
//   .then((content4) => {
//     result += content4;
//     console.log(result, "---result 4");
//     return writeFile("result.txt", result); // process to write result.txt
//   })
//   .then(() => {
//     console.log("writing done!"); // writing done
//   })
//   .catch((err) => {
//     console.log(err);
//     // error will be log here
//   });
/* End using promise object */

let result = "";
async function mergeFile() {
  try {
    const content1 = await read("content1.txt");
    result += content1;
    const content2 = await read("content2.txt");
    result += content2;
    const content3 = await read("content3.txt");
    result += content3;
    const content4 = await read("content4.txt");
    result += content4;
    await writeFile("result.txt", result);
    const finalResult = await read("result.txt");

    console.log(finalResult, "Writing Success");
  } catch (err) {
    console.log(err);
  }
}

mergeFile();
