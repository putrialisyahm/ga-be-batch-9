// Write if-else statements to fulfill the following conditions:
// 1. if score more than 60 you pass otherwise you failed // final output
// 2. scorenya tidak boleh lebih dari 2 digit // validasi
// 3. scorenya tidak boleh digit keduanya yaitu, bukan nol e.g. 61 62 | 60 70 80 90 // validasi
// 4. scorenya tidak boleh minus // validasi
// 5. scorenya digit pertama harus ganjil // validasi
// 6. data type scorenya harus number // validasi
// 7. grade A 90-100, grade B 80-90, grade C 70-80, grade D 60-70, grade E < 60 // final output

function testScore(num) {
  // code below this line

  // VALIDATIONS
  // scorenya tidak boleh lebih dari 2 digit 10  99 100 1000
  if (num > 99 && num !== 100)
    // 101+++
    console.log(
      "Tolong masukan skor maksimal 2 digit selain 100!",
      "Angkamu: ",
      num
    );

  // scorenya tidak boleh digit keduanya yaitu, bukan nol e.g. 61 62 | 60 70 80 90 // validasi
  // kalau 1 digit, kita skip check
  // number kita ga bisa dapet index

  let tempStr = String(num);
  // DRY, Do Not Repeat Yourself
  // kita mau cek digit/index, klo tipenya number, kita ga bisa dapet digit/index nya
  // 900
  // "900"

  if (typeof num == "number" && tempStr.length > 1 && num % 10 === 0) {
    // check if digit 2
    console.log("Digit ke-2 itu harus nol!", "Angkamu: ", num);
  }

  // scorenya tidak boleh minus
  if (num < 0)
    console.log("Tidak boleh masukin angka minus!", "Angkamu: ", num);

  // scorenya digit pertama harus ganjil
  // % > sisa bagi, 7 % 2 = 1  > num % 2 == 1
  if (tempStr[0] % 2 == 0)
    console.log("Digit ke-1 harus bilangin ganjil!", "Angkamu: ", num);

  // data type scorenya harus number
  if (typeof num !== "number")
    console.log("Tolong masukan angka aja!", "Angkamu: ", num);

  // score > 60, lulus else tidak lulus
  // grade A 90-100, grade B 80-89, grade C 70-79, grade D 60-69, grade E < 60
  if (num > 60 && num !== 99 && num !== 98) {
    console.log("Lulus", "Angkamu: ", num);
    if (num >= 90) console.log("Grade mu A");
    if (num >= 80 && num < 90) console.log("Grade mu B");
    if (num >= 70 && num < 80) console.log("Grade mu C");
    if (num >= 60 && num < 70) console.log("Grade mu D");
  } else {
    console.log("Tidak lulus", "Angkamu: ", num);
    console.log("Grade mu E");
  }
}

let sol1 = testScore("putri");
let sol2 = testScore(90); // > "90" , "0" == 0

let arr = [9];

sol1;
sol2;

//testScore(50) should return "Failed"
//testScore(90) should return "Passed"
